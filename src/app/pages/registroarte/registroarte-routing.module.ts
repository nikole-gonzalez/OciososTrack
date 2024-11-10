import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroartePage } from './registroarte.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroartePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroartePageRoutingModule {}
