import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'listado',
    loadChildren: () => import('./pages/listado/listado.module').then( m => m.ListadoPageModule)
  },
  {
    path: 'recupera-contrasena',
    loadChildren: () => import('./pages/recupera-contrasena/recupera-contrasena.module').then( m => m.RecuperaContrasenaPageModule)
  },
  {
    path: 'orgullo',
    loadChildren: () => import('./pages/orgullo/orgullo.module').then( m => m.OrgulloPageModule)
  },
  {
    path: 'listado-series',
    loadChildren: () => import('./pages/listado-series/listado-series.module').then( m => m.ListadoSeriesPageModule)
  },
  {
    path: 'bluey',
    loadChildren: () => import('./pages/bluey/bluey.module').then( m => m.BlueyPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/error/error.module').then( m => m.ErrorPageModule)
  },
  
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
