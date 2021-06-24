import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EgresoUsuarioPage } from './egreso-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: EgresoUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EgresoUsuarioPageRoutingModule {}
