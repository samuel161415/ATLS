import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorsRegistrationComponent } from './mentors-registration.component';

describe('MentorsRegistrationComponent', () => {
  let component: MentorsRegistrationComponent;
  let fixture: ComponentFixture<MentorsRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorsRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorsRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
