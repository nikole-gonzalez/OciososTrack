import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarstreamingPageRoutingModule } from './editarstreaming-routing.module';

import { EditarstreamingPage } from './editarstreaming.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarstreamingPageRoutingModule
  ],
  declarations: [EditarstreamingPage]
})
export class EditarstreamingPageModule {}
