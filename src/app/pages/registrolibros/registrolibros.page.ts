import { Component, OnInit } from '@angular/core';
import { FirebaseOciososService } from 'src/app/services/firebase-ociosos.service';
import { Libros } from 'src/app/class/libros';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Camera,CameraResultType,CameraSource } from '@capacitor/camera'; // es para que funcione la camara desde el navegador 
import { defineCustomElements } from '@ionic/pwa-elements/loader';

defineCustomElements(window);


@Component({
  selector: 'app-registrolibros',
  templateUrl: './registrolibros.page.html',
  styleUrls: ['./registrolibros.page.scss'],
})
export class RegistrolibrosPage implements OnInit {

  imagenLibroURL ="";
  tituloLibro ="";
  autorLibro ="";
  comentarioLibro ="";
  valoracionLibro =0;
  fotoCamaraLibro= "";
  userId ="";


  constructor( private firebaseOciososService: FirebaseOciososService, public toastController: ToastController, public router: Router) { }

  ngOnInit() {}

  agregarLibros() {
    if (this.fotoCamaraLibro) {
      const imageName = `${new Date().getTime()}_libro.jpg`;
  
      this.firebaseOciososService.subirImagenYObtenerURL(this.fotoCamaraLibro, imageName)
        .then(urlImagen => {
          this.fotoCamaraLibro = urlImagen;
  
          const nuevoLibro = new Libros(
            this.imagenLibroURL,
            this.tituloLibro,
            this.autorLibro,
            this.comentarioLibro,
            this.valoracionLibro,
            this.fotoCamaraLibro,
            this.userId,
          );
  
          this.firebaseOciososService.agregarLibros(nuevoLibro).then(() => {
            console.log('Libro agregado con éxito');
            this.presentToast('top', 'Libro agregado con éxito');
            this.limpiarFormulario();
            this.router.navigate(['/listado']);
          }).catch(error => {
            console.error('Error al agregar el libro:', error);
            this.presentToast('top', 'Error al agregar el libro');
          });
        })
        .catch(error => {
          console.error('Error al subir la imagen:', error);
          this.presentToast('top', 'Error al subir la imagen');
        });
    }
  }

  async presentToast( position: 'top' | 'middle' | 'bottom', mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000,
      position: position
    });
    toast.present();
  }

  limpiarFormulario() {
    this.imagenLibroURL = "";
    this.tituloLibro = "";
    this.autorLibro = "";
    this.comentarioLibro = "";
    this.valoracionLibro = 0;
    this.fotoCamaraLibro = "";
  }

  async tomarFoto() {
    const image = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      quality: 100,
    });
  
    if (image.dataUrl) {
      this.fotoCamaraLibro = image.dataUrl;  // Asigna solo si tiene valor
    } else {
      console.error("Error al capturar la imagen");
    }
  }


}
