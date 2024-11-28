import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Streaming } from 'src/app/class/streaming';
import { FirebaseOciososService } from 'src/app/services/firebase-ociosos.service';
import { Camera,CameraResultType,CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-editarstreaming',
  templateUrl: './editarstreaming.page.html',
  styleUrls: ['./editarstreaming.page.scss'],
})
export class EditarstreamingPage implements OnInit {

  streaming: Streaming = new Streaming('', '', '', '', 0, '', '');
  idStreaming: string;

  constructor(private route : ActivatedRoute, private firebaseOciososService : FirebaseOciososService,
    private toastController : ToastController, private router : Router) { }

    ngOnInit() {
      const idStreaming = this.route.snapshot.paramMap.get('idStreaming');
      console.log("ID del Streaming:", idStreaming); // Verifica que se muestra el ID correcto
    
      if (idStreaming) {
        this.firebaseOciososService.getStreamingById(idStreaming).subscribe(streamingData => {
          if (streamingData) {
            this.streaming = streamingData as Streaming;
            this.streaming.idStreaming = idStreaming; // Asegúrate de asignar el ID al objeto
          } else {
            console.error("No se encontró el streaming con el ID:", idStreaming);
          }
        });
      } else {
        console.error("ID de streaming no válido");
      }
    }
    
  actualizarStreaming() {

    if (!this.streaming.imagenStreamingURL || !this.streaming.tituloStreaming || !this.streaming.plataformaStreaming || !this.streaming.comentarioStreaming || !this.streaming.fotoStreaming ||
      this.streaming.valoracionStreaming === null || this.streaming.valoracionStreaming === undefined) {
    this.presentToast('Todos los campos son obligatorios');
    return;
  }

  // Validación de la valoración
  if (this.streaming.valoracionStreaming < 1 || this.streaming.valoracionStreaming > 10) {
    this.presentToast('La valoración debe estar entre 1 y 10');
    return;
  }

    this.firebaseOciososService.actualizarStreaming(this.streaming).then(() => {
      console.log('Streaming actualizado con éxito');
      this.router.navigate(['/listado-series']);  // Redirigir al listado después de la actualización
    }).catch(error => {
      console.error('Error al actualizar el streaming: ', error);
    });
  }
 
  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  clearInput(field: string) {
    switch (field) {
      case 'imagenStreamingURL':
        this.streaming.imagenStreamingURL = '';
        break;
        case 'fotoStreaming':
          this.streaming.fotoStreaming = '';
        break;
    }}
  
  async seleccionarImagen(source: CameraSource) {
    try {
      const image = await Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        source: source,
        quality: 100,
      });
      if (image.dataUrl) {
        this.streaming.fotoStreaming = image.dataUrl;
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
