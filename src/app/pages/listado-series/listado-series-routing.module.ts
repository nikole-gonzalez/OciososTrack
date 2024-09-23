import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoSeriesPage } from './listado-series.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoSeriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoSeriesPageRoutingModule {}
