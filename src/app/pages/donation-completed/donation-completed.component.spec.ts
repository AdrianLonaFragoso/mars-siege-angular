import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationCompletedComponent } from './donation-completed.component';

describe('DonationCompletedComponent', () => {
  let component: DonationCompletedComponent;
  let fixture: ComponentFixture<DonationCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
