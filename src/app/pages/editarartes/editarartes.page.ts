import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Arte } from 'src/app/class/arte';
import { FirebaseOciososService } from 'src/app/services/firebase-ociosos.service';
import { Camera,CameraResultType,CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-editarartes',
  templateUrl: './editarartes.page.html',
  styleUrls: ['./editarartes.page.scss'],
})
export class EditarartesPage implements OnInit {

  arte: Arte = new Arte ('','','',0,'','','')
  idArte: string;

  constructor(private route: ActivatedRoute, private firebaseOciososService: FirebaseOciososService,
    private toastController : ToastController, private router: Router) { }


    ngOnInit() {
      const idArte = this.route.snapshot.paramMap.get('idArte');
      console.log("ID del Arte:", idArte); // Verifica que se muestra el ID correcto
    
      if (idArte) {
        this.firebaseOciososService.getArteById(idArte).subscribe(arteData => {
          if (arteData) {
            this.arte = arteData as Arte;
            this.arte.idArte = idArte; // Asegúrate de asignar el ID al objeto
          } else {
            console.error("No se encontró el Deporte con el ID:", idArte);
          }
        });
      } else {
        console.error("ID de Arte no válido");
      }
    }
    
  actualizarArte() {

    if (!this.arte.nombreArte || !this.arte.descripcionArte || !this.arte.imagenArteURL || !this.arte.fotoCamaraArte || !this.arte.materialesArte ||
      this.arte.valoracionArte === null || this.arte.valoracionArte === undefined) {
    this.presentToast('Todos los campos son obligatorios');
    return;
  }

  // Validación de la valoración
  if (this.arte.valoracionArte < 1 || this.arte.valoracionArte > 10) {
    this.presentToast('La valoración debe estar entre 1 y 10');
    return;
  }

    this.firebaseOciososService.actualizarArte(this.arte).then(() => {
      console.log('Arte actualizado con éxito');
      this.router.navigate(['/listado-artes']);  // Redirigir al listado después de la actualización
    }).catch(error => {
      console.error('Error al actualizar Arte: ', error);
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
        this.arte.fotoCamaraArte = image.dataUrl;
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
        this.arte.imagenArteURL = '';
        break;
        case 'fotoCamaraArte':
          this.arte.fotoCamaraArte = '';
        break;
    }}



}

