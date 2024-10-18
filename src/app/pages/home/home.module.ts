import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';


import { HomePageRoutingModule } from './home-routing.module';
import { SugerenciasComponent } from 'src/app/components/sugerencias/sugerencias.component';
import { UsuarioComponent } from 'src/app/components/usuario/usuario.component';
import { ConfiguracionComponent } from 'src/app/components/configuracion/configuracion.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, SugerenciasComponent, UsuarioComponent, ConfiguracionComponent]
})
export class HomePageModule {}
