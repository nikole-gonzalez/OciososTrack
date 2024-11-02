import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrodeportePage } from './registrodeporte.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrodeportePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrodeportePageRoutingModule {}
