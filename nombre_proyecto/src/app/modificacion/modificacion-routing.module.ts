import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificacionPage } from './modificacion.page';

const routes: Routes = [
  {
    path: '',
    component: ModificacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificacionPageRoutingModule {}
