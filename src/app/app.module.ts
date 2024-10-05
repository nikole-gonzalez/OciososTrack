import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';

import { IonicStorageModule } from '@ionic/storage-angular';

import { provideHttpClient } from '@angular/common/http';  // En lugar de HttpClientModule




export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot()],
  providers: [ provideLottieOptions({
    player: () => import('lottie-web'), // Importación asíncrona de Lottie
  }), provideHttpClient()],
  bootstrap: [AppComponent],
  
})
export class AppModule {}

