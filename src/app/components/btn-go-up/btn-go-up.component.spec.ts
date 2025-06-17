import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnGoUpComponent } from './btn-go-up.component';

describe('BtnGoUpComponent', () => {
  let component: BtnGoUpComponent;
  let fixture: ComponentFixture<BtnGoUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnGoUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnGoUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
