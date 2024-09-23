import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})

export class ListadoPage implements OnInit {

  constructor( private router: Router) {}

  // Función navegación entre páginas 
  
  ingresaraorgullo(){
    this.router.navigate(['/orgullo'])
  }

  ngOnInit() { }

}