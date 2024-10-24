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

import { HttpClientModule } from '@angular/common/http';
import { Sug1Service } from './services/sug1.service';


import { AngularFireModule} from '@angular/fire/compat';
import { AngularFireAuthModule} from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';



export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    IonicStorageModule.forRoot(), 
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), 
    AngularFireAuthModule, 
    AngularFirestoreModule,
    ],
  providers: [provideLottieOptions({
    player: () => import('lottie-web'), // Importación asíncrona de Lottie
  }), provideHttpClient(), 
  Sug1Service,
  provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
  provideFirestore(()=> getFirestore())],
  bootstrap: [AppComponent],
  
})
export class AppModule {}

