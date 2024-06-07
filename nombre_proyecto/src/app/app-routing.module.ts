import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'consulta',
    loadChildren: () => import('./consulta/consulta.module').then( m => m.ConsultaPageModule)
  },
  {
    path: 'eliminacion',
    loadChildren: () => import('./eliminacion/eliminacion.module').then( m => m.EliminacionPageModule)
  },
  {
    path: 'modificacion',
    loadChildren: () => import('./modificacion/modificacion.module').then( m => m.ModificacionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
