import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearEgresoPageRoutingModule } from './crear-egreso-routing.module';
import { ComponentsModule } from '../../components/components.module';


import { CrearEgresoPage } from './crear-egreso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CrearEgresoPageRoutingModule
  ],
  declarations: [CrearEgresoPage]
})
export class CrearEgresoPageModule {}
