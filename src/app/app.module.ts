import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';


export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: provideLottieOptions({
    player: () => import('lottie-web'), // Importación asíncrona del player de Lottie
  }),
  bootstrap: [AppComponent],
})
export class AppModule {}

