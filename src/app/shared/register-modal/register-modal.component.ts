import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css'],
  standalone: true,
  imports: [CommonModule,SharedModule]
})
export class RegisterModalComponent implements OnInit, OnDestroy {
  isModalOpen: boolean = false;
  isEligibilityChecked: boolean = false;
  registrationType: string | null = null;
  private modalSubscription!: Subscription;
  private eligibilitySubscription!: Subscription;
  private showEligibilitySubscription!: Subscription;
  private registrationTypeSubscription!: Subscription;

  @Input() currentSection: string = "home";
  constructor(private registerService: RegisterService) {}
  @Output() toggleChatEvent = new EventEmitter<boolean>();
  showTeamRegistrationModal = false;
  showIndividualRegistrationModal = false;
  showRegistrationModal = true;
  showModal: boolean = false;
  teamRegistrationLink = "https://a2sv.typeform.com/to/qtKuYH58";
  indivisualRegistrationLink = "https://a2sv.typeform.com/to/yxMUctSN";
  individualName = "individual";
  teamName = "team";
  showEligibilitySection = false;

  ngOnInit() {
    this.modalSubscription = this.registerService.modalOpen$.subscribe(isOpen => {
      this.isModalOpen = isOpen;
      const dialog: HTMLDialogElement | null = document.getElementById('register_service_modal') as HTMLDialogElement;
      if (dialog) {
        if (this.isModalOpen) {
          dialog.showModal();
        } else {
          dialog.close();
        }
      }
    });

    this.eligibilitySubscription = this.registerService.eligibilityChecked$.subscribe(isChecked => {
      this.isEligibilityChecked = isChecked;
    });

    this.showEligibilitySubscription = this.registerService.showEligibility$.subscribe(show => {
      this.showEligibilitySection = show;
    });

    this.registrationTypeSubscription = this.registerService.registrationType$.subscribe(type => {
      this.registrationType = type;
    }); 
  }

  ngOnDestroy() {
    this.modalSubscription.unsubscribe();
    this.eligibilitySubscription.unsubscribe();
    this.showEligibilitySubscription.unsubscribe();
    this.registrationTypeSubscription.unsubscribe();
  }

  closeModal() {
    this.registerService.closeModal();
  }

  onRegisterIndividual() {
    this.closeModal()
    this.toggleChatEvent.emit(false);
    this.showIndividualRegistrationModal = true;
    this.showRegistrationModal = false;
    document.body.classList.add('overflow-hidden', 'z-0')
    document.getElementById('prizes')?.classList.add('z-0')
    document.getElementById('prizes')?.classList.remove('z-40')
    document.getElementById('partners')?.classList.add('hidden')
    document.getElementById('info')?.classList.add('hidden')
    document.getElementById('judges')?.classList.add('hidden')
    document.getElementById('eligibility')?.classList.add('hidden')
    document.getElementById('about-us')?.classList.add('hidden')
    document.getElementById('footer')?.classList.add('hidden')
  }
  onRegisterTeam() {
    this.closeModal()
    this.toggleChatEvent.emit(false);
    this.showTeamRegistrationModal = true;
    this.showRegistrationModal = false;
    document.body.classList.add('overflow-hidden', 'z-0')
    document.getElementById('prizes')?.classList.add('z-0')
    document.getElementById('prizes')?.classList.remove('z-40')
    document.getElementById('partners')?.classList.add('hidden')
    document.getElementById('partners')?.classList.add('hidden')
    document.getElementById('info')?.classList.add('hidden')
    document.getElementById('judges')?.classList.add('hidden')
    document.getElementById('eligibility')?.classList.add('hidden')
    document.getElementById('about-us')?.classList.add('hidden')
    document.getElementById('footer')?.classList.add('hidden')
  }

  onHideModal() {
    this.toggleChatEvent.emit(true);
    this.showModal = false;
    this.showRegistrationModal = true;
    this.showTeamRegistrationModal = false;
    this.showIndividualRegistrationModal = false;
    document.body.classList.remove("overflow-hidden", "z-0");
    document.getElementById("prizes")?.classList.remove("z-0");
    document.getElementById("prizes")?.classList.add("z-40");
    document.getElementById("partners")?.classList.remove("hidden");
    document.getElementById("info")?.classList.remove("hidden");
    document.getElementById("judges")?.classList.remove("hidden");
    document.getElementById("eligibility")?.classList.remove("hidden");
    document.getElementById("about-us")?.classList.remove("hidden");
    document.getElementById("footer")?.classList.remove("hidden");
  }

  showEligibility() {
    this.registerService.showEligibility();
  }
  navigateToEligibility() {
    // this.registerService.checkEligibility();
    
    // this.closeModal();
    // this.scrollToSection('eligibility')

    // Implement navigation logic here
    this.showEligibility();
  }

  scrollToSection(sectionId: string): void {
    this.currentSection = sectionId;
    const canNavigate: boolean =
      !document.body.classList.contains("overflow-hidden");
    const element = document.getElementById(sectionId);
    if (element != null && canNavigate) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  registerIndividual() {
    // Implement individual registration logic here
  }

  registerTeam() {
    // Implement team registration logic here
  }
}
