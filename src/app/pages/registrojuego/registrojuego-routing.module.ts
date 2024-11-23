import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrojuegoPage } from './registrojuego.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrojuegoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrojuegoPageRoutingModule {}
