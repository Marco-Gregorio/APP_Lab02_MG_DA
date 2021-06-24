import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearEgresoPage } from './crear-egreso.page';

const routes: Routes = [
  {
    path: '',
    component: CrearEgresoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearEgresoPageRoutingModule {}
