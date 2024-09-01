import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotentialPartnersComponent } from './potential-partners.component';

describe('PotentialPartnersComponent', () => {
  let component: PotentialPartnersComponent;
  let fixture: ComponentFixture<PotentialPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotentialPartnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PotentialPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
