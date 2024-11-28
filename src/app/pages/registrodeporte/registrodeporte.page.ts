import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera,CameraResultType,CameraSource } from '@capacitor/camera';
import { ToastController } from '@ionic/angular';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { Deportes } from 'src/app/class/deportes';
import { FirebaseOciososService } from 'src/app/services/firebase-ociosos.service';

defineCustomElements(window);

@Component({
  selector: 'app-registrodeporte',
  templateUrl: './registrodeporte.page.html',
  styleUrls: ['./registrodeporte.page.scss'],
})
export class RegistrodeportePage implements OnInit {
  formTouched = false;

  imagenDeporteURL = "";
  nombreDeporte = "";
  lugarDeporte = "";
  comentarioDeporte = "";
  valoracionEntrenamiento = 0;
  fotoCamaraDeporte = "";
  fechaDeporte = "";
  userId ="";

  constructor(private firebaseOciososService: FirebaseOciososService, public  toastController : ToastController, public router  : Router) { }

  ngOnInit() {
  }

  agregarDeporte() {
    this.formTouched = true; // Marca el formulario como tocado
  
    // Validación de campos obligatorios
    if (!this.nombreDeporte || !this.lugarDeporte || !this.comentarioDeporte || !this.fechaDeporte || !this.imagenDeporteURL || !this.fotoCamaraDeporte) {
      this.presentToast('top', 'Todos los campos son obligatorios');
      return;
    }
  
    // Validación de la valoración
    if (this.valoracionEntrenamiento < 1 || this.valoracionEntrenamiento > 10) {
      this.presentToast('top', 'La valoración debe estar entre 1 y 10');
      return;
    }
  
    if (this.fotoCamaraDeporte) {
      const imageName = `${new Date().getTime()}_deporte.jpg`;
  
      this.firebaseOciososService.subirImagenYObtenerURLDeportes(this.fotoCamaraDeporte, imageName)
        .then(urlImagen => {
          this.fotoCamaraDeporte = urlImagen;
  
          const nuevoDeporte = new Deportes(
            this.imagenDeporteURL,
            this.nombreDeporte,
            this.lugarDeporte,
            this.comentarioDeporte,
            this.valoracionEntrenamiento,
            this.fotoCamaraDeporte,
            this.fechaDeporte,
            this.userId,
          );
  
          this.firebaseOciososService.agregarDeporte(nuevoDeporte).then(() => {
            console.log('Deporte agregado con éxito');
            this.presentToast('top', 'Actividad física agregada con éxito');
            this.limpiarFormulario();
            this.router.navigate(['/listado-deportes']);
          }).catch(error => {
            console.error('Error al agregar el Deporte:', error);
            this.presentToast('top', 'Error al agregar la Actividad Física');
          });
        })
        .catch(error => {
          console.error('Error al subir la imagen:', error);
          this.presentToast('top', 'Error al subir la imagen');
        });
    } else {
      this.presentToast('top', 'Debe tomar o seleccionar una foto');
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
    this.imagenDeporteURL = "";
    this.nombreDeporte = "";
    this.lugarDeporte = "";
    this.comentarioDeporte = "";
    this.valoracionEntrenamiento = 0;
    this.fotoCamaraDeporte = "";
    this.fechaDeporte = "";
    
  }

  async seleccionarImagen(source: CameraSource) {
    try {
      const image = await Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        source: source,
        quality: 100,
      });
      if (image.dataUrl) {
        this.fotoCamaraDeporte = image.dataUrl;
      } else {
        console.error("Error al obtener la imagen");
      }
    } catch (error) {
      console.error("Error al acceder a la imagen", error);
    }
  }

  tomarFoto() {
    this.seleccionarImagen(CameraSource.Camera);
  }

  abrirGaleria() {
    this.seleccionarImagen(CameraSource.Photos);
  }

}
