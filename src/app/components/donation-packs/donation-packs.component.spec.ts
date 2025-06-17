import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationPacksComponent } from './donation-packs.component';

describe('DonationPacksComponent', () => {
  let component: DonationPacksComponent;
  let fixture: ComponentFixture<DonationPacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationPacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationPacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
