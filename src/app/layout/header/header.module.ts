import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ModalGenericModule } from 'src/app/components/modal-generic/modal-generic.module';
import { RouterModule } from '@angular/router';
import { DonationPacksModule } from 'src/app/components/donation-packs/donation-packs.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    ModalGenericModule,
    RouterModule,
    DonationPacksModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
