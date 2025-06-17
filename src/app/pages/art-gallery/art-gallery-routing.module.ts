import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtGalleryComponent } from './art-gallery.component';

const routes: Routes = [{ path: '', component: ArtGalleryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtGalleryRoutingModule { }
