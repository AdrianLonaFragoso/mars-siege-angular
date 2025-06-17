import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderModule } from 'src/app/layout/header/header.module';
import { DonationPacksModule } from 'src/app/components/donation-packs/donation-packs.module';
import { TimelineModule } from 'src/app/components/timeline/timeline.module';
import { ProgressBarModule } from 'src/app/components/progress-bar/progress-bar.module';
import { StarsModule } from 'src/app/components/stars/stars.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderModule,
    DonationPacksModule,
    TimelineModule,
    ProgressBarModule,
    StarsModule,
  ],
})
export class HomeModule {}
