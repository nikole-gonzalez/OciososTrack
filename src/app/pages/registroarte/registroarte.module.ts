import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroartePageRoutingModule } from './registroarte-routing.module';

import { RegistroartePage } from './registroarte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroartePageRoutingModule
  ],
  declarations: [RegistroartePage]
})
export class RegistroartePageModule {}
