import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificacionPageRoutingModule } from './modificacion-routing.module';

import { ModificacionPage } from './modificacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificacionPageRoutingModule
  ],
  declarations: [ModificacionPage]
})
export class ModificacionPageModule {}
