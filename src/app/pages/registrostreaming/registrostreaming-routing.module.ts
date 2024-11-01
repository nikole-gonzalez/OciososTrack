import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrostreamingPage } from './registrostreaming.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrostreamingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrostreamingPageRoutingModule {}
