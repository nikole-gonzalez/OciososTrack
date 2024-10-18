import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
  styleUrls: ['./sugerencias.component.scss'],
})
export class SugerenciasComponent  implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {}

}
