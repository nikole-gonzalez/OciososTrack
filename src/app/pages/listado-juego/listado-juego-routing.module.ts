import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoJuegoPage } from './listado-juego.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoJuegoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoJuegoPageRoutingModule {}
