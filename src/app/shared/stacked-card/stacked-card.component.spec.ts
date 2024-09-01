import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedCardComponent } from './stacked-card.component';

describe('StackedCardComponent', () => {
  let component: StackedCardComponent;
  let fixture: ComponentFixture<StackedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackedCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StackedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
