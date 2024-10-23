import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarlibrosPageRoutingModule } from './editarlibros-routing.module';

import { EditarlibrosPage } from './editarlibros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarlibrosPageRoutingModule
  ],
  declarations: [EditarlibrosPage]
})
export class EditarlibrosPageModule {}
