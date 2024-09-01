import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsentService {
  private displayConsent: boolean = false;

  constructor() {}

  // Method to indicate whether to show the consent UI
  showConsentUI(value: boolean): void {
    this.displayConsent = value;
  }

  // Method to check if consent UI should be displayed
  shouldShowConsentUI(): boolean {
    return this.displayConsent;
  }

  getConsentStatus(): boolean {
    return localStorage.getItem('consentGiven') !== null;
  }

  giveConsent(): void {
    localStorage.setItem('consentGiven', 'true');
    this.displayConsent = false; // Hide the consent UI after giving consent
  }

  withdrawConsent(): void {
    localStorage.removeItem('consentGiven');
    this.displayConsent = true; // Show the consent UI after withdrawing consent (if needed)
  }
}
