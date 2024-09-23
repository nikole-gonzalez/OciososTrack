import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlueyPageRoutingModule } from './bluey-routing.module';

import { BlueyPage } from './bluey.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlueyPageRoutingModule
  ],
  declarations: [BlueyPage]
})
export class BlueyPageModule {}
