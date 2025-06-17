import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebComicComponent } from './web-comic.component';

describe('WebComicComponent', () => {
  let component: WebComicComponent;
  let fixture: ComponentFixture<WebComicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebComicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
