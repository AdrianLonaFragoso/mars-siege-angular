import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonationPacksComponent } from './donation-packs.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { GlowWrapperModule } from '../glow-wrapper/glow-wrapper.module';

@NgModule({
  declarations: [DonationPacksComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ClipboardModule,
    MatSnackBarModule,
    GlowWrapperModule,
  ],
  exports: [DonationPacksComponent],
})
export class DonationPacksModule {}
