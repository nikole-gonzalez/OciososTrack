import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlueyPage } from './bluey.page';

const routes: Routes = [
  {
    path: '',
    component: BlueyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlueyPageRoutingModule {}
