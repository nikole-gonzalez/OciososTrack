import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarartesPageRoutingModule } from './editarartes-routing.module';

import { EditarartesPage } from './editarartes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarartesPageRoutingModule
  ],
  declarations: [EditarartesPage]
})
export class EditarartesPageModule {}
