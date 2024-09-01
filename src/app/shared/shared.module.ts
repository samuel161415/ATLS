import { RegistrationComponent } from './registration/registration.component';
import { EligibilityComponent } from '../pages/eligibility/eligibility.component';
// import { FixedEligiblityComponent } from '../pages/fixed-eligiblity/fixed-eligiblity.component';
// import {}
// shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [RegistrationComponent,EligibilityComponent],
  imports: [CommonModule],
  exports: [RegistrationComponent,EligibilityComponent]
})
export class SharedModule {}
