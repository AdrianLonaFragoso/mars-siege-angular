import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SponsorsComponent } from './sponsors.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [{ path: '', component: SponsorsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class SponsorsRoutingModule { }
