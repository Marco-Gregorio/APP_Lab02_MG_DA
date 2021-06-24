import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./paginas/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro-formulario',
    loadChildren: () => import('./paginas/registro-formulario/registro-formulario.module').then( m => m.RegistroFormularioPageModule)
  },
  {
    path: 'egreso-usuario',
    loadChildren: () => import('./paginas/egreso-usuario/egreso-usuario.module').then( m => m.EgresoUsuarioPageModule)
  },
  {
    path: 'crear-egreso',
    loadChildren: () => import('./paginas/crear-egreso/crear-egreso.module').then( m => m.CrearEgresoPageModule)
  },
  {
    path: 'listar-egreso',
    loadChildren: () => import('./paginas/listar-egreso/listar-egreso.module').then( m => m.ListarEgresoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
