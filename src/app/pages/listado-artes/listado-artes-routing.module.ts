import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoArtesPage } from './listado-artes.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoArtesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoArtesPageRoutingModule {}
