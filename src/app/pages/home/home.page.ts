import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthlocalService } from 'src/app/services/authlocal.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private router: Router,
               private authlocalService : AuthlocalService
  ) {}

  ngOnInit() {
    if (!this.authlocalService.gUsuarioAutenticado()) {
      // Si no está autenticado, lo redirigimos al login
      this.router.navigate(['/login']);
    }
  }

  //Función para cerrar sesión
  gcerrarSesion() {
    this.authlocalService.gCerrarSesion(); // Elimina el token de localStorage
    this.router.navigate(['/login']); // Redirige al login
  }

  // Función navegar entre páginas
  ingresarListadoLibros (){
    this.router.navigate(['/listado'])
  }

  ingresarListadoSeries(){
    this.router.navigate(['listado-series'])
  }
}
