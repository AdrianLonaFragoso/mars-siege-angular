import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationCancelComponent } from './donation-cancel.component';

describe('DonationCancelComponent', () => {
  let component: DonationCancelComponent;
  let fixture: ComponentFixture<DonationCancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationCancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
