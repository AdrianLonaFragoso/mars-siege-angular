import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollingTextComponent } from './rolling-text.component';

describe('RollingTextComponent', () => {
  let component: RollingTextComponent;
  let fixture: ComponentFixture<RollingTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RollingTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RollingTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
