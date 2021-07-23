import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayHudComponent } from './display-hud.component';

describe('DisplayHudComponent', () => {
  let component: DisplayHudComponent;
  let fixture: ComponentFixture<DisplayHudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayHudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayHudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
