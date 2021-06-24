import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EgresoUsuarioPageRoutingModule } from './egreso-usuario-routing.module';
import { ComponentsModule } from '../../components/components.module';


import { EgresoUsuarioPage } from './egreso-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    EgresoUsuarioPageRoutingModule
  ],
  declarations: [EgresoUsuarioPage]
})
export class EgresoUsuarioPageModule {}
