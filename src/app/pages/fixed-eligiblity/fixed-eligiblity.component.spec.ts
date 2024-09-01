import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedEligiblityComponent } from './fixed-eligiblity.component';

describe('FixedEligiblityComponent', () => {
  let component: FixedEligiblityComponent;
  let fixture: ComponentFixture<FixedEligiblityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FixedEligiblityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FixedEligiblityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
