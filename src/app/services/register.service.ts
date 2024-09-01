import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private modalOpenSource = new BehaviorSubject<boolean>(false);
  modalOpen$ = this.modalOpenSource.asObservable();

  private eligibilityCheckedSource = new BehaviorSubject<boolean>(false);
  eligibilityChecked$ = this.eligibilityCheckedSource.asObservable();

  private showEligibilitySource = new BehaviorSubject<boolean>(false);
  showEligibility$ = this.showEligibilitySource.asObservable();

  private registrationTypeSource = new BehaviorSubject<string | null>(null);
  registrationType$ = this.registrationTypeSource.asObservable();

  openModal() {
    this.modalOpenSource.next(true);
  }

  closeModal() {
    // console.log("Yes close modal");
    
    this.modalOpenSource.next(false);
    this.showEligibilitySource.next(false);
    // this.registrationTypeSource.next(null);
  }

  checkEligibility() {
    this.eligibilityCheckedSource.next(true);
    this.showEligibilitySource.next(false);
  }

  showEligibility() {
    this.showEligibilitySource.next(true);
  }
  setRegistrationType(type: string) {
    this.registrationTypeSource.next(type);
  }

  // This is used incase if I want to change it in globally 
  switchRegistrationType() {
    const currentType = this.registrationTypeSource.value;
    const newType = currentType === 'individual' ? 'team' : 'individual';
    this.registrationTypeSource.next(newType);
  }
}
