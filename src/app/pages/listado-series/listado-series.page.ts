import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-series',
  templateUrl: './listado-series.page.html',
  styleUrls: ['./listado-series.page.scss'],
})
export class ListadoSeriesPage implements OnInit {

  constructor(private router: Router) { }

  //Navegación entre páginas   
  ingresarbluey(){
    this.router.navigate(['/bluey'])
  }

  ngOnInit() {
  }

}
