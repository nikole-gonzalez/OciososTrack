import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FirebaseOciososService } from 'src/app/services/firebase-ociosos.service';
import { Libros } from 'src/app/class/libros';
import { FormsModule } from '@angular/forms';

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

  //ngOnInit() {
    
    //this.firebaseOciososService.getLibroById(this.idLibro).subscribe(libroData => {
      //console.log(libroData); // Verifica si los datos llegan correctamente
      //if (libroData) {
        //this.libro = new Libros(
          //libroData.imagenLibroURL || '',
          //libroData.tituloLibro,
          //libroData.autorLibro,
          //libroData.comentarioLibro,
          //libroData.valoracionLibro,
          //libroData.fotoCamaraLibro || '',
          //this.idLibro
        //);
      //}
    //});
  //}
  ngOnInit() {
    const idLibro = this.route.snapshot.paramMap.get('idLibro');
    this.firebaseOciososService.getLibroById(idLibro || "" ).subscribe(libroData => {
      this.libro = libroData as Libros;  // Forzar el tipo de libroData a Libros
    });
  }
  
//MIO
  //actualizarLibro() {
    //if (!this.libro.tituloLibro || !this.libro.autorLibro) {
      //this.presentToast('Faltan datos del libro');
      //return;
    //}
    
    //this.firebaseOciososService.actualizarLibro(this.idLibro, this.libro)
      //.then(() => {
        //this.presentToast('Libro actualizado con éxito');
        //this.router.navigate(['/listado']);
      //})
      //.catch(error => {
        //this.presentToast('Error al actualizar el libro');
        //console.error('Error:', error);
      //});
  //}

  //NO FUINCIONA 1
  actualizarLibro() {
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

}
  
