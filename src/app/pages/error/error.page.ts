import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-error',
  templateUrl: './error.page.html',
  styleUrls: ['./error.page.scss'],
})
export class ErrorPage {

  options: AnimationOptions = {
    path: 'assets/animaciones/Error-animacion.json'
  };

  constructor() { }

  onAnimationCreated(animation: any) {
    console.log(animation);
  }

  ngOnInit() {
  }

}
