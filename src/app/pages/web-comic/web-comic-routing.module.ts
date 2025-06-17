import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComicComponent } from './web-comic.component';

const routes: Routes = [{ path: '', component: WebComicComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebComicRoutingModule { }
