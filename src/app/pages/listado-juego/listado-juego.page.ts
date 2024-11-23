import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Juego } from 'src/app/class/juego';
import { FirebaseLoginService } from 'src/app/services/firebase-login.service';
import { FirebaseOciososService } from 'src/app/services/firebase-ociosos.service';

@Component({
  selector: 'app-listado-juego',
  templateUrl: './listado-juego.page.html',
  styleUrls: ['./listado-juego.page.scss'],
})
export class ListadoJuegoPage implements OnInit {
  userId: any;
  juegos: Juego [] = [];

  constructor(private router:Router, public firebaseOciososService: FirebaseOciososService, private authService:FirebaseLoginService) { }

  async ngOnInit() {
    const user = await this.authService.getProfile();
    this.userId = user?.uid;
  
    if (this.userId) {
      this.cargarJuegos();
    } else {
      console.error('No se encontró el userId');
    }
  }
  
  cargarJuegos(){
    this.firebaseOciososService.getJuegos().subscribe(juegos => {
    this.juegos = juegos;
      console.log(juegos)      
  }, error =>{
    console.error('Error al obtener los juegos')
  });
    
  }

  editarJuegos(idJuego: string) {
    if (idJuego) {
      this.router.navigate(['/editarjuego', idJuego]);  // Navegar a la página de edición con el ID del juego
    } else {
      console.error('Error: No se encontró el ID de Juego.');
    }
  }

  eliminarJuego(idJuego: string) {
    this.firebaseOciososService.eliminarJuego(idJuego).then(() => {
      console.log('Juego eliminado con éxito');
    }).catch(error => {
      console.error('Error al eliminar Juego: ', error);
    });
  }


  segmentChanged($event:any){
    console.log($event);
    let direccion = $event.detail.value;
    this.router.navigate(['home/'+direccion])
  }

}
