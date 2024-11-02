import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrodeportePageRoutingModule } from './registrodeporte-routing.module';

import { RegistrodeportePage } from './registrodeporte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrodeportePageRoutingModule
  ],
  declarations: [RegistrodeportePage]
})
export class RegistrodeportePageModule {}
