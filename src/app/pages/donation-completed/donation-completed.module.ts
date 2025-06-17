import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonationCompletedRoutingModule } from './donation-completed-routing.module';
import { DonationCompletedComponent } from './donation-completed.component';


@NgModule({
  declarations: [DonationCompletedComponent],
  imports: [
    CommonModule,
    DonationCompletedRoutingModule
  ]
})
export class DonationCompletedModule { }
