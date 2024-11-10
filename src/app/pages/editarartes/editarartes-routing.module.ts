import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarartesPage } from './editarartes.page';

const routes: Routes = [
  {
    path: '',
    component: EditarartesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarartesPageRoutingModule {}
