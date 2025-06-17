import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlowWrapperComponent } from './glow-wrapper.component';

describe('GlowWrapperComponent', () => {
  let component: GlowWrapperComponent;
  let fixture: ComponentFixture<GlowWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlowWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlowWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
