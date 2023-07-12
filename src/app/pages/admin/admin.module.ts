import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../module/material.module';
import { AdminComponent } from './admin.component';



@NgModule({
  declarations: [AdminComponent,],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports:[AdminComponent,]
})
export class AdminModule { }
