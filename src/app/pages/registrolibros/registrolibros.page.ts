import { Component, OnInit } from '@angular/core';
import { FirebaseOciososService } from 'src/app/services/firebase-ociosos.service';
import { Libros } from 'src/app/class/libros';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registrolibros',
  templateUrl: './registrolibros.page.html',
  styleUrls: ['./registrolibros.page.scss'],
})
export class RegistrolibrosPage implements OnInit {

  imagenLibroURL ="";
  tituloLibro ="";
  autorLibro ="";
  comentarioLibro ="";
  valoracionLibro =0;
  fotoCamaraLibro= "";


  constructor( private firebaseOciososService: FirebaseOciososService, public toastController: ToastController, public router: Router) { }

  ngOnInit() {}

  agregarLibros(){
    const NUEVOLIBRO = new Libros(
      this.imagenLibroURL,
      this.tituloLibro,
      this.autorLibro,
      this.comentarioLibro,
      this.valoracionLibro,
      this.fotoCamaraLibro,

  );

    this.firebaseOciososService.agregarLibros(NUEVOLIBRO).then(()=> {
      console.log('Libro agregado con éxito')
      this.presentToast('top', "Libro agregado con éxito");
      this.router.navigate(['/listado']);

      }).catch(error => {
        console.error('Error al agregar el libro: ' , error);
        this.presentToast('top', "Errro al agregar el libro");
      });
      
  }

  async presentToast( position: 'top' | 'middle' | 'bottom', mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000,
      position: position
    });
    toast.present();
  }


}
