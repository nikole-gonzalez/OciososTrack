import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Juego } from 'src/app/class/juego';
import { FirebaseOciososService } from 'src/app/services/firebase-ociosos.service';
import { Camera,CameraResultType,CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-editarjuego',
  templateUrl: './editarjuego.page.html',
  styleUrls: ['./editarjuego.page.scss'],
})
export class EditarjuegoPage implements OnInit {

  juego: Juego = new Juego ('','','',0,'','','')
  idArte: string;

  constructor(private route: ActivatedRoute, private firebaseOciososService: FirebaseOciososService, private toastController: ToastController, private router: Router) { }

  ngOnInit() {
    const idJuego = this.route.snapshot.paramMap.get('idJuego');
      console.log("ID del Juego:", idJuego); // Verifica que se muestra el ID correcto
    
      if (idJuego) {
        this.firebaseOciososService.getJuegoById(idJuego).subscribe(juegoData => {
          if (juegoData) {
            this.juego = juegoData as Juego;
            this.juego.idJuego = idJuego; 
          } else {
            console.error("No se encontró el Juego con el ID:", idJuego);
          }
        });
      } else {
        console.error("ID de Arte no válido");
      }
  }

  actualizarJuego() {

    if (!this.juego.nombreJuego || !this.juego.descripcionJuego || !this.juego.imagenJuegoURL || !this.juego.fotoCamaraJuego || !this.juego.formatoJuego ||
      this.juego.valoracionJuego === null || this.juego.valoracionJuego === undefined) {
    this.presentToast('Todos los campos son obligatorios');
    return;
  }

  // Validación de la valoración
  if (this.juego.valoracionJuego < 1 || this.juego.valoracionJuego > 10) {
    this.presentToast('La valoración debe estar entre 1 y 10');
    return;
  }

    this.firebaseOciososService.actualizarJuego(this.juego).then(() => {
      console.log('Juego actualizado con éxito');
      this.router.navigate(['/listado-juego']);  // Redirigir al listado después de la actualización
    }).catch(error => {
      console.error('Error al actualizar Juego: ', error);
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

  async seleccionarImagen(source: CameraSource) {
    try {
      const image = await Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        source: source,
        quality: 100,
      });
      if (image.dataUrl) {
        this.juego.fotoCamaraJuego = image.dataUrl;
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

  clearInput(field: string) {
    switch (field) {
      case 'imagenArteURL':
        this.juego.imagenJuegoURL = '';
        break;
        case 'fotoCamaraArte':
          this.juego.fotoCamaraJuego = '';
        break;
    }}

}
