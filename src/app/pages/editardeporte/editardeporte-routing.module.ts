import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditardeportePage } from './editardeporte.page';

const routes: Routes = [
  {
    path: '',
    component: EditardeportePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditardeportePageRoutingModule {}
