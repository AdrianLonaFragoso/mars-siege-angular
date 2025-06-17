import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RollingTextComponent } from './rolling-text.component';

@NgModule({
  declarations: [RollingTextComponent],
  imports: [CommonModule],
  exports: [RollingTextComponent],
})
export class RollingTextModule {}
