import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrolibrosPage } from './registrolibros.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrolibrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrolibrosPageRoutingModule {}
