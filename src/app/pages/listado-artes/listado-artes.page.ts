import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Arte } from 'src/app/class/arte';
import { FirebaseLoginService } from 'src/app/services/firebase-login.service';
import { FirebaseOciososService } from 'src/app/services/firebase-ociosos.service';

@Component({
  selector: 'app-listado-artes',
  templateUrl: './listado-artes.page.html',
  styleUrls: ['./listado-artes.page.scss'],
})
export class ListadoArtesPage implements OnInit {

  userId: any;
  artes: Arte [] = [];

  constructor( private router: Router, public firebaseOciososService: FirebaseOciososService, private authService: FirebaseLoginService) { }

  async ngOnInit() {
    const user = await this.authService.getProfile();
    this.userId = user?.uid;
  
    if (this.userId) {
      this.cargarArtes();
    } else {
      console.error('No se encontró el userId');
    }
  }
  
  cargarArtes(){
    this.firebaseOciososService.getArtes().subscribe(artes => {
    this.artes = artes;
      console.log(artes)      
  }, error =>{
    console.error('Error al obtener los libros')
  });
    
  }

  editarArtes(idArte: string) {
    if (idArte) {
      this.router.navigate(['/editarartes', idArte]);  // Navegar a la página de edición con el ID del libro
    } else {
      console.error('Error: No se encontró el ID de Arte.');
    }
  }

  eliminarArte(idArte: string) {
    this.firebaseOciososService.eliminarArte(idArte).then(() => {
      console.log('Manualidad eliminado con éxito');
    }).catch(error => {
      console.error('Error al eliminar Manualidad: ', error);
    });
  }


  segmentChanged($event:any){
    console.log($event);
    let direccion = $event.detail.value;
    this.router.navigate(['home/'+direccion])
  }

}
