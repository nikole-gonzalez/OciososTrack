import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libros } from 'src/app/class/libros';
import { FirebaseOciososService } from 'src/app/services/firebase-ociosos.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})

export class ListadoPage implements OnInit {

  libros: Libros [] = [];

  constructor( private router: Router, public firebaseOciososService: FirebaseOciososService) {}

  // Función navegación entre páginas 
  
  ingresaraorgullo(){
    this.router.navigate(['/orgullo'])
  }

  ngOnInit() {
     // Obtener libros al iniciar la página
    this.firebaseOciososService.getLibros().subscribe(libros => {
    this.libros = libros;
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