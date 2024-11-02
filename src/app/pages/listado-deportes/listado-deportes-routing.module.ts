import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoDeportesPage } from './listado-deportes.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoDeportesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoDeportesPageRoutingModule {}
