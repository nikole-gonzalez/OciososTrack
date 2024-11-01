import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrostreamingPageRoutingModule } from './registrostreaming-routing.module';

import { RegistrostreamingPage } from './registrostreaming.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrostreamingPageRoutingModule
  ],
  declarations: [RegistrostreamingPage]
})
export class RegistrostreamingPageModule {}
