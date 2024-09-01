// consent.component.ts
import { Component } from '@angular/core';
import { ConsentService } from './consent.service';

@Component({
  selector: 'app-consent',
  template: `
    <div *ngIf="showConsent()" class="consent-modal">
      <div class="modal-content " >
        <p>We use cookies to improve user experience. Do you consent?</p>
        <div class="btn-container">
          <button class="consent-btn accept" (click)="giveConsent()">
            Accept
          </button>
          <button class="consent-btn reject" (click)="rejectConsent()">
            Reject
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .consent-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
      }

      .modal-content {
        background-color: black;
        padding: 30px;
        text-align: center;

        border-radius: 10px;
        border-radius: 10px;
        max-width: 90%;
        max-height: 50%;
      }
      .btn-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 20px;
      }

      .consent-text {
        color: white;
        margin-bottom: 20px;
      }

      .button-group {
        display: flex;
        justify-content: space-between;
      }

      .consent-btn {
        padding: 10px 20px;
        border: 2px solid transparent;
        border-radius: 5px;
        color: white;
        cursor: pointer;
        font-size: 16px;
      }

      .consent-btn:hover {
        background-color: purple;
      }

      .accept {
        background-color: green;
        margin-left : 10px;
      }

      .reject {
        background-color: red;
      }
    `,
  ],
})
export class ConsentComponent {
  constructor(public consentService: ConsentService) {}

  ngOnInit(): void {
    // Check if consent has already been given (e.g., from LocalStorage)
    // If not, set up the consent UI
    if (!this.consentService.getConsentStatus()) {
      // Additional logic to handle UI setup or triggering a service method if necessary
      // For example, setting up the UI directly from here
      // This could involve additional methods or interactions as needed
      // For demonstration, let's assume it triggers a boolean flag in the ConsentService:
      this.consentService.showConsentUI(true);
    }
  }

  showConsent(): boolean {
    // Determine whether to show the consent UI
    // Based on the service status or any other conditions
    return this.consentService.shouldShowConsentUI();
  }
  giveConsent(): void {
    this.consentService.giveConsent();
  }
  rejectConsent(): void {
    
    this.consentService.withdrawConsent();
    this.consentService.showConsentUI(false);
  }
}
