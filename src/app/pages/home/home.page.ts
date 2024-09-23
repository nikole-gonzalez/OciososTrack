import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private router: Router) {}

  // Función navegar entre páginas
  ingresarListadoLibros (){
    this.router.navigate(['/listado'])
  }

  ingresarListadoSeries(){
    this.router.navigate(['listado-series'])
  }
}
