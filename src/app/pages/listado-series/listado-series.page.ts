import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Streaming } from 'src/app/class/streaming';
import { FirebaseLoginService } from 'src/app/services/firebase-login.service';
import { FirebaseOciososService } from 'src/app/services/firebase-ociosos.service';

@Component({
  selector: 'app-listado-series',
  templateUrl: './listado-series.page.html',
  styleUrls: ['./listado-series.page.scss'],
})
export class ListadoSeriesPage implements OnInit {
  userId: any;
  streamings: Streaming [] = [];

  constructor(private router: Router, public firebaseOciososService: FirebaseOciososService, private authService: FirebaseLoginService) { }

  async ngOnInit() {
    const user = await this.authService.getProfile();
    this.userId = user?.uid;
  
    if (this.userId) {
      this.cargarStreaming();
    } else {
      console.error('No se encontró el userId');
    }
  }

  cargarStreaming(){
    this.firebaseOciososService.getStreaming().subscribe(streamings => {
      this.streamings = streamings;
      console.log(streamings);
    }, error => {
      console.error('Error al obtener los Streamings');
    });
  }
  
  editarStreaming(idStreaming: string) {
    if (idStreaming) {
      this.router.navigate(['/editarstreaming', idStreaming]);  // Navegar a la página de edición con el ID del streaming
    } else {
      console.error('Error: No se encontró el ID del Streaming.');
    }
  }

  eliminarStreaming(idStreaming: string) {
    this.firebaseOciososService.eliminarStreaming(idStreaming).then(() => {
      console.log('Streaming eliminado con éxito');
    }).catch(error => {
      console.error('Error al eliminar el Streaming: ', error);
    });
  }

  segmentChanged($event:any){
    console.log($event);
    let direccion = $event.detail.value;
    this.router.navigate(['home/'+direccion])
  }

}
