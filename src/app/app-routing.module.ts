import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    //canActivate: [AuthGuard] // protegemos la ruta
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    //canActivate: [AuthGuard]

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
    path: 'registrarse',
    loadChildren: () => import('./pages/registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
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
