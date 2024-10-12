import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'cuenta',
        loadChildren: () => import('./../../pages/cuenta/cuenta.module').then( m => m.CuentaPageModule)
      },
      {
        path: 'sugerencias',
        loadChildren: () => import('./../../pages/sugerencias/sugerencias.module').then( m => m.SugerenciasPageModule)
      },
      {
        path: 'configuracion',
        loadChildren: () => import('./../../pages/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
