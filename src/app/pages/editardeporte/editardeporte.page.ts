import { Component, isDevMode, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Deportes } from 'src/app/class/deportes';
import { FirebaseOciososService } from 'src/app/services/firebase-ociosos.service';

@Component({
  selector: 'app-editardeporte',
  templateUrl: './editardeporte.page.html',
  styleUrls: ['./editardeporte.page.scss'],
})
export class EditardeportePage implements OnInit {

  deporte: Deportes = new Deportes ('', '', '', '', 0, '', '', '')
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
            this.deporte.idDeporte = idDeporte; // Asegúrate de asignar el ID al objeto
          } else {
            console.error("No se encontró el Deporte con el ID:", idDeporte);
          }
        });
      } else {
        console.error("ID de deporte no válido");
      }
    }
    
  actualizarDeporte() {
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

}


