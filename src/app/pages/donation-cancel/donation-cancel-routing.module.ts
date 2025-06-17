import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonationCancelComponent } from './donation-cancel.component';

const routes: Routes = [{ path: '', component: DonationCancelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonationCancelRoutingModule { }
