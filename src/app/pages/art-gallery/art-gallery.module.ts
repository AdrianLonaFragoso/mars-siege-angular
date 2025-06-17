import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtGalleryRoutingModule } from './art-gallery-routing.module';
import { ArtGalleryComponent } from './art-gallery.component';
import { HeaderModule } from 'src/app/layout/header/header.module';
import { ModalGenericModule } from 'src/app/components/modal-generic/modal-generic.module';

@NgModule({
  declarations: [ArtGalleryComponent],
  imports: [
    CommonModule,
    ArtGalleryRoutingModule,
    HeaderModule,
    ModalGenericModule,
  ],
})
export class ArtGalleryModule {}
