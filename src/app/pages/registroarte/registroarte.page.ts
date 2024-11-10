import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera,CameraResultType,CameraSource } from '@capacitor/camera';
import { ToastController } from '@ionic/angular';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { Arte } from 'src/app/class/arte';
import { FirebaseOciososService } from 'src/app/services/firebase-ociosos.service';

defineCustomElements(window);

@Component({
  selector: 'app-registroarte',
  templateUrl: './registroarte.page.html',
  styleUrls: ['./registroarte.page.scss'],
})
export class RegistroartePage implements OnInit {
  imagenArteURL = "";
  nombreArte = "";
  descripcionArte = "";
  valoracionArte = 0;
  materialesArte = "";
  fotoCamaraArte = "";
  userId= "";


  constructor(private firebaseOciososService: FirebaseOciososService, public toastController: ToastController, public router : Router ) { }

  ngOnInit() {
  }

  agregarArte() {
    if (this.fotoCamaraArte) {
      const imageName = `${new Date().getTime()}_arte.jpg`;
  
      this.firebaseOciososService.subirImagenYObtenerURLArte(this.fotoCamaraArte, imageName)
        .then(urlImagen => {
          this.fotoCamaraArte = urlImagen;
  
          const nuevoArte = new Arte(
            this.imagenArteURL,
            this.nombreArte,
            this.descripcionArte,
            this.valoracionArte,
            this.materialesArte,
            this.fotoCamaraArte,
            this.userId,
          );
  
          this.firebaseOciososService.agregarArte(nuevoArte).then(() => {
            console.log('Manualidad agregada con éxito');
            this.presentToast('top', 'Manualidad agregada con éxito');
            this.limpiarFormulario();
            this.router.navigate(['/listado-artes']);
          }).catch(error => {
            console.error('Error al agregar Manualidad:', error);
            this.presentToast('top', 'Error al agregar Manulidad');
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
    this.imagenArteURL = "";
    this.nombreArte = "";
    this.descripcionArte = "";
    this.valoracionArte = 0;
    this.materialesArte = "";
    this.fotoCamaraArte = "";
    
  }

  async seleccionarImagen(source: CameraSource) {
    try {
      const image = await Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        source: source,
        quality: 100,
      });
      if (image.dataUrl) {
        this.fotoCamaraArte = image.dataUrl;
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

