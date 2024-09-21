import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperaContrasenaPageRoutingModule } from './recupera-contrasena-routing.module';

import { RecuperaContrasenaPage } from './recupera-contrasena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperaContrasenaPageRoutingModule
  ],
  declarations: [RecuperaContrasenaPage]
})
export class RecuperaContrasenaPageModule {}
