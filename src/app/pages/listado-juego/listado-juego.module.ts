import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoJuegoPageRoutingModule } from './listado-juego-routing.module';

import { ListadoJuegoPage } from './listado-juego.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoJuegoPageRoutingModule
  ],
  declarations: [ListadoJuegoPage]
})
export class ListadoJuegoPageModule {}
