import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoDeportesPageRoutingModule } from './listado-deportes-routing.module';

import { ListadoDeportesPage } from './listado-deportes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoDeportesPageRoutingModule
  ],
  declarations: [ListadoDeportesPage]
})
export class ListadoDeportesPageModule {}
