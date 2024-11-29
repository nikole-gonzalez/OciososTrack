import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FirebaseOciososService } from 'src/app/services/firebase-ociosos.service';
import { Libros } from 'src/app/class/libros';
import { Camera,CameraResultType,CameraSource } from '@capacitor/camera';


@Component({
  selector: 'app-editarlibros',
  templateUrl: './editarlibros.page.html',
  styleUrls: ['./editarlibros.page.scss'],
})
export class EditarlibrosPage implements OnInit {

  libro: Libros = new Libros('', '', '', '', 0, '');
  idLibro: string;
  

  constructor(private route : ActivatedRoute,
    private firebaseOciososService : FirebaseOciososService,
    private toastController : ToastController,
    private router : Router
  ) { }

  ngOnInit() { 
    const idLibro = this.route.snapshot.paramMap.get('idLibro');
    this.firebaseOciososService.getLibroById(idLibro || "" ).subscribe(libroData => {
      this.libro = libroData as Libros;  // Forzar el tipo de libroData a Libros
    });
  }
 
  actualizarLibro() {

    if (!this.libro.tituloLibro || !this.libro.autorLibro || !this.libro.comentarioLibro || 
      this.libro.valoracionLibro === null || this.libro.valoracionLibro === undefined) {
    this.presentToast('Todos los campos son obligatorios');
    return;
  }

  // Validación de la valoración
  if (this.libro.valoracionLibro < 1 || this.libro.valoracionLibro > 10) {
    this.presentToast('La valoración debe estar entre 1 y 10');
    return;
  }

    this.firebaseOciososService.actualizarLibro(this.libro).then(() => {
      console.log('Libro actualizado con éxito');
      this.router.navigate(['/listado']);  // Redirigir al listado después de la actualización
    }).catch(error => {
      console.error('Error al actualizar el libro: ', error);
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
        this.libro.fotoCamaraLibro = image.dataUrl;
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
      case 'fotoCamaraLibro':
        this.libro.fotoCamaraLibro = '';
        break;
    }}

}