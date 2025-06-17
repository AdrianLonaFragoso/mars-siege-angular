import { Component } from '@angular/core';
import { donations, walletData } from './constants';
import { Clipboard } from '@angular/cdk/clipboard';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-donation-packs',
  templateUrl: './donation-packs.component.html',
  styleUrls: ['./donation-packs.component.scss'],
})
export class DonationPacksComponent {
  donations = donations;
  activeWallet: any;
  textControl: FormControl;
  fadeAlert = false;

  constructor(
    private clipboard: Clipboard // Servicio para usar el portapapeles
  ) {
    this.textControl = new FormControl(
      '0x4392bad9154180401c1f79dd99bcaa6911b1426f',
      Validators.required
    );
  }

  showWallet(wallet: any) {
    this.activeWallet = walletData[wallet];
    this.fadeAlert = false;
  }

  closeWallet() {
    this.activeWallet = null;
  }

  copyToClipboard(): void {
    // Se copia el texto del input al portapapeles
    this.clipboard.copy(this.textControl.value);

    this.fadeAlert = true;
  }
}
