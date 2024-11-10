import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoArtesPageRoutingModule } from './listado-artes-routing.module';

import { ListadoArtesPage } from './listado-artes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoArtesPageRoutingModule
  ],
  declarations: [ListadoArtesPage]
})
export class ListadoArtesPageModule {}
