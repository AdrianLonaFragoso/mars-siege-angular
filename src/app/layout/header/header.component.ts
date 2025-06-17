import { Component, OnInit } from '@angular/core';
import { menu } from './constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showMenu = false;
  menu = menu;
  donateModal = false;
  donationSessionKey = 'launch-donation-modal';

  constructor() {}

  ngOnInit() {
    const modalLaunch = sessionStorage.getItem(this.donationSessionKey);
    if (!modalLaunch) {
      // this.toggleDonateModal();
    }
  }

  acivateMenu() {
    this.showMenu = !this.showMenu;
  }

  toggleDonateModal() {
    sessionStorage.setItem(this.donationSessionKey, 'true');
    this.donateModal = !this.donateModal;
  }
}
