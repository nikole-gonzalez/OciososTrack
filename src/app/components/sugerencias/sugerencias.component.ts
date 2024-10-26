import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/class/pelicula';
import { Sug1Service } from 'src/app/services/sug1.service';



@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
  styleUrls: ['./sugerencias.component.scss'],
})
export class SugerenciasComponent  implements OnInit {


    peliculas: Pelicula[] = []; // Aquí almacenarás la lista de películas
  
    constructor(private sug1service : Sug1Service) { }
  
    async ngOnInit() {
      try {
        // Llama al método con fallback para obtener las películas
        this.peliculas = await this.sug1service.getPeliculasConFallback();
        console.log('Películas obtenidas:', this.peliculas);
      } catch (error) {
        console.error('Error al obtener las películas:', error);
      }
    }
  
  }
  


