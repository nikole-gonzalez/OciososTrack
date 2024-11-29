import { Component, isDevMode, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Deportes } from 'src/app/class/deportes';
import { FirebaseOciososService } from 'src/app/services/firebase-ociosos.service';
import { Camera,CameraResultType,CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-editardeporte',
  templateUrl: './editardeporte.page.html',
  styleUrls: ['./editardeporte.page.scss'],
})
export class EditardeportePage implements OnInit {

  deporte: Deportes = new Deportes ('', '', '', '', 0, '', '')
  idDeporte: string;

  constructor(private route: ActivatedRoute, private firebaseOciososService : FirebaseOciososService,
    private toastController : ToastController, private router : Router) { }
    
    ngOnInit() {
      const idDeporte = this.route.snapshot.paramMap.get('idDeporte');
      console.log("ID del Deporte:", idDeporte); // Verifica que se muestra el ID correcto
    
      if (idDeporte) {
        this.firebaseOciososService.getDeporteById(idDeporte).subscribe(deporteData => {
          if (deporteData) {
            this.deporte = deporteData as Deportes;
            this.deporte.idDeporte = idDeporte;
          } else {
            console.error("No se encontró el Deporte con el ID:", idDeporte);
          }
        });
      } else {
        console.error("ID de deporte no válido");
      }
    }
    
  actualizarDeporte() {

    if (!this.deporte.fotoCamaraDeporte  || !this.deporte.nombreDeporte || !this.deporte.lugarDeporte || !this.deporte.comentarioDeporte || !this.deporte.fechaDeporte ||
      this.deporte.valoracionEntrenamiento === null || this.deporte.valoracionEntrenamiento === undefined) {
    this.presentToast('Todos los campos son obligatorios');
    return;
  }

  // Validación de la valoración
  if (this.deporte.valoracionEntrenamiento < 1 || this.deporte.valoracionEntrenamiento > 10) {
    this.presentToast('La valoración debe estar entre 1 y 10');
    return;
  }

    this.firebaseOciososService.actualizarDeporte(this.deporte).then(() => {
      console.log('Deporte actualizado con éxito');
      this.router.navigate(['/listado-deportes']);  // Redirigir al listado después de la actualización
    }).catch(error => {
      console.error('Error al actualizar el deporte: ', error);
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
        this.deporte.fotoCamaraDeporte = image.dataUrl;
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
      case 'fotoCamaraDeporte':
        this.deporte.fotoCamaraDeporte = '';
        break;
    }}

}


