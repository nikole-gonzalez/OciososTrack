import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarstreamingPage } from './editarstreaming.page';

const routes: Routes = [
  {
    path: '',
    component: EditarstreamingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarstreamingPageRoutingModule {}
