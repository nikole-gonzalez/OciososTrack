import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrolibrosPageRoutingModule } from './registrolibros-routing.module';

import { RegistrolibrosPage } from './registrolibros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrolibrosPageRoutingModule
  ],
  declarations: [RegistrolibrosPage]
})
export class RegistrolibrosPageModule {}
