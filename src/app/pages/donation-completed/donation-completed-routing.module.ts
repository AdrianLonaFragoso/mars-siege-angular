import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonationCompletedComponent } from './donation-completed.component';

const routes: Routes = [{ path: '', component: DonationCompletedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonationCompletedRoutingModule { }
