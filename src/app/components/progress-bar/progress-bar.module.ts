import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ProgressBarComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [ProgressBarComponent],
})
export class ProgressBarModule {}
