import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prize2024Component } from './prize2024.component';

describe('Prize2024Component', () => {
  let component: Prize2024Component;
  let fixture: ComponentFixture<Prize2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prize2024Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prize2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
