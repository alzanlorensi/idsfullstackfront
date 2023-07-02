import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErroPipe } from './erro.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [ErroPipe],
  exports: [ErroPipe],
})
export class PipeModule {}
