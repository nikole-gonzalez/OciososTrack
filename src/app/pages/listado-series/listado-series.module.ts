import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoSeriesPageRoutingModule } from './listado-series-routing.module';

import { ListadoSeriesPage } from './listado-series.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoSeriesPageRoutingModule
  ],
  declarations: [ListadoSeriesPage]
})
export class ListadoSeriesPageModule {}
