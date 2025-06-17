import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
  @Input() progressTitle = '';

  readonly ngUnsubscribe: Subject<void> = new Subject();

  sponsorProgressData: any;
  mountTotal = 83000;
  mountAwayFrom: any;

  mountPercentage: any;
  mountTotalDonation: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('https://services.mars-siege.com/sponsors/progress', {})
      .subscribe((data) => {
        this.sponsorProgressData = data;
        this.getMountAway();
        this.getPercentage();
        this.getTotalDonation();
      });
  }

  getMountAway() {
    this.mountAwayFrom =
      this.mountTotal - this.sponsorProgressData.totalDonationAmount;
  }

  getTotalDonation() {
    this.mountTotalDonation = this.sponsorProgressData.totalDonationAmount;
  }

  getPercentage() {
    this.mountPercentage = this.sponsorProgressData.percentage;
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
