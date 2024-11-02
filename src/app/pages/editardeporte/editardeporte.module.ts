import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditardeportePageRoutingModule } from './editardeporte-routing.module';

import { EditardeportePage } from './editardeporte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditardeportePageRoutingModule
  ],
  declarations: [EditardeportePage]
})
export class EditardeportePageModule {}
