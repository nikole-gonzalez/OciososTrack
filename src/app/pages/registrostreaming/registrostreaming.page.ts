import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FirebaseOciososService } from 'src/app/services/firebase-ociosos.service';
import { Camera,CameraResultType,CameraSource } from '@capacitor/camera';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { Streaming } from 'src/app/class/streaming';

defineCustomElements(window);

@Component({
  selector: 'app-registrostreaming',
  templateUrl: './registrostreaming.page.html',
  styleUrls: ['./registrostreaming.page.scss'],
})
export class RegistrostreamingPage implements OnInit {
  formTouched = false;

  imagenStreamingURL ="";
  tituloStreaming ="";
  plataformaStreaming ="";
  comentarioStreaming ="";
  valoracionStreaming =0;
  fotoStreaming= "";
  userId ="";


  constructor(private firebaseOciososService : FirebaseOciososService, public toastController : ToastController, public router : Router) { }

  ngOnInit() {
  }

  agregarStreaming() {
    this.formTouched = true; // Marca el formulario como tocado

    // Validación de campos obligatorios
    if (!this.imagenStreamingURL || !this.tituloStreaming || !this.plataformaStreaming || !this.comentarioStreaming || !this.valoracionStreaming || !this.fotoStreaming) {
      this.presentToast('top', 'Todos los campos son obligatorios');
      return;
    }
  
    // Validación de la valoración
    if (this.valoracionStreaming < 1 || this.valoracionStreaming > 10) {
      this.presentToast('top', 'La valoración debe estar entre 1 y 10');
      return;
    }

      if (this.fotoStreaming) {
        const imageName = `${new Date().getTime()}_streaming.jpg`;
    
        this.firebaseOciososService.subirImagenYObtenerURLStreaming(this.fotoStreaming, imageName)
          .then(urlImagen => {
            this.fotoStreaming = urlImagen;
    
            const nuevoStreaming = new Streaming(
              this.imagenStreamingURL,
              this.tituloStreaming,
              this.plataformaStreaming,
              this.comentarioStreaming,
              this.valoracionStreaming,
              this.fotoStreaming,
              this.userId,
            );
    
            this.firebaseOciososService.agregarStreaming(nuevoStreaming).then(() => {
              console.log('Streaming agregado con éxito');
              this.presentToast('top', 'Streaming agregado con éxito');
              this.limpiarFormulario();
              this.router.navigate(['/listado-series']);
            }).catch(error => {
              console.error('Error al agregar el streaming:', error);
              this.presentToast('top', 'Error al agregar el streaming');
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
    this.imagenStreamingURL = "";
    this.tituloStreaming = "";
    this.plataformaStreaming = "";
    this.comentarioStreaming = "";
    this.valoracionStreaming = 0;
    this.fotoStreaming = "";
  }

  async seleccionarImagen(source: CameraSource) {
    try {
      const image = await Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        source: source,
        quality: 100,
      });
      if (image.dataUrl) {
        this.fotoStreaming = image.dataUrl;
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
