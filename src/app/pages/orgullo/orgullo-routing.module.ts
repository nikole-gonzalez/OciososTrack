import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrgulloPage } from './orgullo.page';

const routes: Routes = [
  {
    path: '',
    component: OrgulloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrgulloPageRoutingModule {}
