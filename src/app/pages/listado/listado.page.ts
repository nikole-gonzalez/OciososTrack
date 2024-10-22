import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libros } from 'src/app/class/libros';
import { FirebaseLoginService } from 'src/app/services/firebase-login.service';
import { FirebaseOciososService } from 'src/app/services/firebase-ociosos.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})

export class ListadoPage implements OnInit {

  userId: any;
  libros: Libros [] = [];

  constructor( private router: Router, public firebaseOciososService: FirebaseOciososService, private authService: FirebaseLoginService) {}
  
  async ngOnInit() {
    const user = await this.authService.getProfile();
    this.userId = user?.uid;
  
    if (this.userId) {
      this.cargarLibros();
    } else {
      console.error('No se encontró el userId');
    }
  }
  
  cargarLibros(){
    this.firebaseOciososService.getLibros().subscribe(libros => {
    this.libros = libros;
      console.log(libros)      
  }, error =>{
    console.error('Error al obtener los libros')
  });
}

   

 /*    // Navegar a la página de edición/modificación de un libro
  editarLibro(libro: Libros) {
    this.router.navigate(['/editar-libro', libro.idLibro]);
  } */

  eliminarLibro(idLibro: string) {
    this.firebaseOciososService.eliminarLibro(idLibro).then(() => {
      console.log('Libro eliminado con éxito');
    }).catch(error => {
      console.error('Error al eliminar el libro: ', error);
    });
  }


  segmentChanged($event:any){
    console.log($event);
    let direccion = $event.detail.value;
    this.router.navigate(['home/'+direccion])
  }

}



