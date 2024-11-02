import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Deportes } from 'src/app/class/deportes';
import { FirebaseLoginService } from 'src/app/services/firebase-login.service';
import { FirebaseOciososService } from 'src/app/services/firebase-ociosos.service';

@Component({
  selector: 'app-listado-deportes',
  templateUrl: './listado-deportes.page.html',
  styleUrls: ['./listado-deportes.page.scss'],
})
export class ListadoDeportesPage implements OnInit {
  userId: any;
  deportes: Deportes [] = [];

  constructor(private router: Router, public firebaseOciososService: FirebaseOciososService, private authService: FirebaseLoginService ) { }

  async ngOnInit() {
    const user = await this.authService.getProfile();
    this.userId = user?.uid;
  
    if (this.userId) {
      this.cargarDeporte();
    } else {
      console.error('No se encontró el userId');
    }
  }

  cargarDeporte(){
    this.firebaseOciososService.getDeportes().subscribe(deportes => {
      this.deportes = deportes;
      console.log(deportes);
    }, error => {
      console.error('Error al obtener los Deportes');
    });
  }
  

  editarDeporte(idDeporte: string) {
    if (idDeporte) {
      this.router.navigate(['/editardeporte', idDeporte]);  // Navegar a la página de edición con el ID del streaming
    } else {
      console.error('Error: No se encontró el ID del Deporte.');
    }
  }

  eliminarDeporte(idDeporte: string) {
    this.firebaseOciososService.eliminarDeporte(idDeporte).then(() => {
      console.log('Deporte eliminado con éxito');
    }).catch(error => {
      console.error('Error al eliminar el Deporte: ', error);
    });
  }

  segmentChanged($event:any){
    console.log($event);
    let direccion = $event.detail.value;
    this.router.navigate(['home/'+direccion])
  }
 
}
