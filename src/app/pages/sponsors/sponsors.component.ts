import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss'],
})
export class SponsorsComponent implements OnInit {
  sponsors: any = [];

  readonly ngUnsubscribe: Subject<void> = new Subject();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('https://services.mars-siege.com/sponsors', {})
      .subscribe((data) => {
        this.sponsors = data;
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
