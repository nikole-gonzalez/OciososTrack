import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/class/pelicula';
import { Sug1Service } from 'src/app/services/sug1.service';


@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.page.html',
  styleUrls: ['./sugerencias.page.scss'],
})
export class SugerenciasPage implements OnInit {

  peliculas: Pelicula[] = []; // Aquí almacenarás la lista de películas

  constructor(private sug1service : Sug1Service) { }

  ngOnInit() {
    this.sug1service.getPeliculas2().subscribe(
      (data) => {
        this.peliculas = data; // Almacena los datos obtenidos en la propiedad 'peliculas'
      },
      (error) => {
        console.error('Error al obtener las películas:', error); // Manejo de errores
      });
  }

}