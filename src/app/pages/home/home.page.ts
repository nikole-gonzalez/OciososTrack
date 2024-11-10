import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthlocalService } from 'src/app/services/authlocal.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router,
              private authlocalService: AuthlocalService) {}

  ngOnInit() {
    if (!this.authlocalService.gUsuarioAutenticado()) {
      this.router.navigate(['/login']);
    }
  }

  // Función navegar entre páginas
  ingresarListadoLibros() {
    this.router.navigate(['/listado']);
  }

  ingresarListadoSeries() {
    this.router.navigate(['/listado-series']);
  }

  ingresarListadoDeportes() {
    this.router.navigate(['/listado-deportes']);
  }

  ingresarListadoArtes() {
    this.router.navigate(['/listado-artes']);
  }



  // Función para detectar si estamos en la ruta principal de 'home'
  esHomeRuta(): boolean {
    return this.router.url === '/home';
  }

  segmentChanged($event:any){
    console.log($event);
    let direccion = $event.detail.value;
    this.router.navigate(['/home/'+direccion])
  }

}