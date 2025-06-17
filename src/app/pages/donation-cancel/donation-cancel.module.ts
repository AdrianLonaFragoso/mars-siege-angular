import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonationCancelRoutingModule } from './donation-cancel-routing.module';
import { DonationCancelComponent } from './donation-cancel.component';


@NgModule({
  declarations: [DonationCancelComponent],
  imports: [
    CommonModule,
    DonationCancelRoutingModule
  ]
})
export class DonationCancelModule { }
