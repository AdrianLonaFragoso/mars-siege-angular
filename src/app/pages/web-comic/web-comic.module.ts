import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebComicRoutingModule } from './web-comic-routing.module';
import { WebComicComponent } from './web-comic.component';

@NgModule({
  declarations: [WebComicComponent],
  imports: [CommonModule, WebComicRoutingModule],
})
export class WebComicModule {}
