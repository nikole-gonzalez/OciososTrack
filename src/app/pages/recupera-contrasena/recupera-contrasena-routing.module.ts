import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperaContrasenaPage } from './recupera-contrasena.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperaContrasenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperaContrasenaPageRoutingModule {}
