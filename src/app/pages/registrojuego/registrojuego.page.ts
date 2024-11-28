import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera,CameraResultType,CameraSource } from '@capacitor/camera';
import { ToastController } from '@ionic/angular';
import { Juego } from 'src/app/class/juego';
import { FirebaseOciososService } from 'src/app/services/firebase-ociosos.service';

@Component({
  selector: 'app-registrojuego',
  templateUrl: './registrojuego.page.html',
  styleUrls: ['./registrojuego.page.scss'],
})
export class RegistrojuegoPage implements OnInit {
  formTouched = false;

  imagenJuegoURL = "";
  nombreJuego = "";
  descripcionJuego = "";
  valoracionJuego = 0;
  formatoJuego = "";
  fotoCamaraJuego = "";
  userId= "";

  constructor(private firebaseOciososService: FirebaseOciososService, public toastController: ToastController, public router: Router) { }

  ngOnInit() {
  }

  agregarJuego() {
    this.formTouched = true; // Marca el formulario como tocado
      // Validación de campos obligatorios
    if (!this.imagenJuegoURL || !this.nombreJuego || !this.descripcionJuego || !this.valoracionJuego || !this.formatoJuego || !this.fotoCamaraJuego) {
      this.presentToast('top', 'Todos los campos son obligatorios');
      return;
    }
  
    // Validación de la valoración
    if (this.valoracionJuego < 1 || this.valoracionJuego > 10) {
      this.presentToast('top', 'La valoración debe estar entre 1 y 10');
      return;
    }

      if (this.fotoCamaraJuego) {
        const imageName = `${new Date().getTime()}_juego.jpg`;
    
        this.firebaseOciososService.subirImagenYObtenerURLArte(this.fotoCamaraJuego, imageName)
          .then(urlImagen => {
            this.fotoCamaraJuego = urlImagen;
    
            const nuevoJuego = new Juego(
              this.imagenJuegoURL,
              this.nombreJuego,
              this.descripcionJuego,
              this.valoracionJuego,
              this.formatoJuego,
              this.fotoCamaraJuego,
              this.userId,
            );
    
            this.firebaseOciososService.agregarJuego(nuevoJuego).then(() => {
              console.log('Juego agregado con éxito');
              this.presentToast('top', 'Juego agregado con éxito');
              this.limpiarFormulario();
              this.router.navigate(['/listado-juego']);
            }).catch(error => {
              console.error('Error al agregar Juego:', error);
              this.presentToast('top', 'Error al agregar Juego');
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
    this.imagenJuegoURL = "";
    this.nombreJuego = "";
    this.descripcionJuego = "";
    this.valoracionJuego = 0;
    this.formatoJuego = "";
    this.fotoCamaraJuego = "";
    
  }

  async seleccionarImagen(source: CameraSource) {
    try {
      const image = await Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        source: source,
        quality: 100,
      });
      if (image.dataUrl) {
        this.fotoCamaraJuego = image.dataUrl;
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
