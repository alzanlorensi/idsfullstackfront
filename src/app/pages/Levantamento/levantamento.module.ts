import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevantamentoComponent } from './levantamento.component';
import { MaterialModule } from '../module/material.module';

@NgModule({
  declarations: [
    LevantamentoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    LevantamentoComponent
  ],
})
export class LevantamentoModule { }
