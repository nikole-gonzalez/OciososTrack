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
    path: 'listado-series',
    loadChildren: () => import('./pages/listado-series/listado-series.module').then( m => m.ListadoSeriesPageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./pages/registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },
  {
    path: 'registrolibros',
    loadChildren: () => import('./pages/registrolibros/registrolibros.module').then( m => m.RegistrolibrosPageModule)
  },
  {
    path: 'editarlibros/:idLibro',
    loadChildren: () => import('./pages/editarlibros/editarlibros.module').then( m => m.EditarlibrosPageModule)
  },
  {
    path: 'registrostreaming',
    loadChildren: () => import('./pages/registrostreaming/registrostreaming.module').then( m => m.RegistrostreamingPageModule)
  },
  {
    path: 'editarstreaming/:idStreaming',
    loadChildren: () => import('./pages/editarstreaming/editarstreaming.module').then( m => m.EditarstreamingPageModule)
  },
  {
    path: 'listado-deportes',
    loadChildren: () => import('./pages/listado-deportes/listado-deportes.module').then( m => m.ListadoDeportesPageModule)
  },
  {
    path: 'editardeporte/:idDeporte',
    loadChildren: () => import('./pages/editardeporte/editardeporte.module').then( m => m.EditardeportePageModule)
  },
  {
    path: 'registrodeporte',
    loadChildren: () => import('./pages/registrodeporte/registrodeporte.module').then( m => m.RegistrodeportePageModule)
  },
  {
    path: 'listado-artes',
    loadChildren: () => import('./pages/listado-artes/listado-artes.module').then( m => m.ListadoArtesPageModule)
  },
  {
    path: 'editarartes/:idArte',
    loadChildren: () => import('./pages/editarartes/editarartes.module').then( m => m.EditarartesPageModule)
  },
  {
    path: 'registroarte',
    loadChildren: () => import('./pages/registroarte/registroarte.module').then( m => m.RegistroartePageModule)
  },
  {
    path: 'listado-juego',
    loadChildren: () => import('./pages/listado-juego/listado-juego.module').then( m => m.ListadoJuegoPageModule)
  },
  {
    path: 'editarjuego/:idJuego',
    loadChildren: () => import('./pages/editarjuego/editarjuego.module').then( m => m.EditarjuegoPageModule)
  },
  {
    path: 'registrojuego',
    loadChildren: () => import('./pages/registrojuego/registrojuego.module').then( m => m.RegistrojuegoPageModule)
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
