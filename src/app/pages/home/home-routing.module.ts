import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { UsuarioComponent } from 'src/app/components/usuario/usuario.component';
import { SugerenciasComponent } from 'src/app/components/sugerencias/sugerencias.component';
import { ConfiguracionComponent } from 'src/app/components/configuracion/configuracion.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'usuario',
        component: UsuarioComponent
      },
      {
        path: 'sugerencias',
        component: SugerenciasComponent
      },
      {
        path: 'configuracion',
        component: ConfiguracionComponent
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
