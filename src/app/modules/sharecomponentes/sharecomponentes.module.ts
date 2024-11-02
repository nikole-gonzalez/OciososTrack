import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SugerenciasComponent } from 'src/app/components/sugerencias/sugerencias.component';
import { UsuarioComponent } from 'src/app/components/usuario/usuario.component';
import { ConfiguracionComponent } from 'src/app/components/configuracion/configuracion.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [SugerenciasComponent, UsuarioComponent, ConfiguracionComponent],
  exports: [SugerenciasComponent, UsuarioComponent, ConfiguracionComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class SharecomponentesModule { }
