import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SponsorsRoutingModule } from './sponsors-routing.module';
import { SponsorsComponent } from './sponsors.component';
import { MatIconModule } from '@angular/material/icon';
import { HeaderModule } from 'src/app/layout/header/header.module';
import { StarsModule } from 'src/app/components/stars/stars.module';
import { GlowWrapperModule } from 'src/app/components/glow-wrapper/glow-wrapper.module';

@NgModule({
  declarations: [SponsorsComponent],
  imports: [
    CommonModule,
    SponsorsRoutingModule,
    MatIconModule,
    HeaderModule,
    GlowWrapperModule,
  ],
})
export class SponsorsModule {}
