import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarlibrosPage } from './editarlibros.page';

const routes: Routes = [
  {
    path: '',
    component: EditarlibrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarlibrosPageRoutingModule {}
