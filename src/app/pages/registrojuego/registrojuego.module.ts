import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrojuegoPageRoutingModule } from './registrojuego-routing.module';

import { RegistrojuegoPage } from './registrojuego.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrojuegoPageRoutingModule
  ],
  declarations: [RegistrojuegoPage]
})
export class RegistrojuegoPageModule {}
