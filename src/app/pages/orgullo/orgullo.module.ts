import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrgulloPageRoutingModule } from './orgullo-routing.module';

import { OrgulloPage } from './orgullo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrgulloPageRoutingModule
  ],
  declarations: [OrgulloPage]
})
export class OrgulloPageModule {}
