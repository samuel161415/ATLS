import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
 OnInit,
 OnDestroy
} from '@angular/core';


import { Cloudinary, CloudinaryImage } from '@cloudinary/url-gen';
import {fill} from "@cloudinary/url-gen/actions/resize";
import { TermsPluginLoaderService } from './privacy_consent/terms-plugin-loader.service'
import { ModalService } from './modal.service';
import { Subscription } from 'rxjs';
import { WinnerModalService } from './shared/winner-modal.service';

declare var loadPrivacyPlugin: any;
// import { PrivacyConsentService } from './privacy-consent.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy  {
  // constructor(private privacyConsentService: PrivacyConsentService) {}
  showPartnerButton: boolean = false;
  isWinnerModalOpen = false;
  modalData: any = {};
  modalSubscription: Subscription | undefined;
  constructor(
    private _el: ElementRef,
    private termsPluginLoaderService: TermsPluginLoaderService,
    private modalService: ModalService,
    private winnerModalService: WinnerModalService
    // private privacyConsentService: PrivacyConsentService // Add the PrivacyConsentService here
  ) {
  }
  openButton(buttonName: string, link: string) {
    window.open(link, '_blank');
  }



  @HostListener('document:click', ['$event'])
  // onDocumentClick(event: MouseEvent) {
  //   if (!this.isClickWithinModal(event) && this.modalService.isModalOpen) {
  //     this.modalService.closeModal();
  //   }
  // }

  isClickWithinModal(event: MouseEvent): boolean {
    // Add logic to determine if the click is within the modal element
    // Return true if click is within the modal, false otherwise
    return false; // Placeholder, replace with actual logic
  }

  get isModalOpen(): boolean {
    return this.modalService.isModalOpen;
  }
  img!: CloudinaryImage;
  title = 'A2SV-Hackathon';
  showChat = false;
  modalOpen = false;
  isButtonAtBottom = false;
  isStickRegisterButtonVisible = false;
  @Output() toggleChatEvent = new EventEmitter<boolean>();
  showModal: boolean = false;
  showTeamRegistrationModal = false;
  showIndividualRegistrationModal = false;
  showRegistrationModal = true;
  registrationDeadline = new Date(2023, 7, 31, 23, 59, 59);
  registrationButtonVisible = true;
  countDownVisible = true;
  countDownDate = new Date(2023, 8, 3, 17, 0, 0);

  ngOnInit(): void {

    this.modalSubscription = this.winnerModalService.isModalOpen$.subscribe((isOpen) => {
      this.isWinnerModalOpen = isOpen;
    });

    this.winnerModalService.modalData$.subscribe((data) => {
      this.modalData = data;
    });
    
    
    this.termsPluginLoaderService.loadPlugin();

   
    

    const cld = new Cloudinary({
      cloud: {
        cloudName: 'eskalate',
        // apiKey: 'YOUR_API_KEY',
        // apiSecret: 'YOUR_API_SECRET',
      },
    });

    setInterval(() => {
      this.updateRegistrationButtonVisibility();
    }, 1000);
    
    
  }
  ngOnDestroy() {
    if (this.modalSubscription) {
      this.modalSubscription.unsubscribe();
    }
  }

  closeModal() {
    this.winnerModalService.toggleModal(false);
  }
  closeJoinModal(){
    this.modalService.closeModal()
  }
  
  
  updateCountDownVisibility() {
    const now = new Date();
    this.countDownVisible = now < this.countDownDate;
  }
  updateRegistrationButtonVisibility() {
    const now = new Date();
    this.registrationButtonVisible = now < this.registrationDeadline;
  }
  onRegisterTeam() {
    this.toggleChatEvent.emit(false);
    this.showIndividualRegistrationModal = true;
    this.showRegistrationModal = false;
    document.body.classList.add('overflow-hidden', 'z-0');
    document.getElementById('prizes')?.classList.add('z-0');
    document.getElementById('prizes')?.classList.remove('z-40');
  }

  decreaseZIndex() {
    document.getElementById('prizes')?.classList.add('z-0');
    document.getElementById('prizes')?.classList.remove('z-40');
    document.getElementById('home')?.classList.add('z-0');
    document.getElementById('home')?.classList.remove('z-40');
    document.getElementById('partners')?.classList.add('z-0');
    document.getElementById('partners')?.classList.remove('z-40');
    document.getElementById('judges')?.classList.add('z-0');
    document.getElementById('judges')?.classList.remove('z-40');
    document.getElementById('info')?.classList.add('z-0');
    document.getElementById('info')?.classList.remove('z-40');
    document.getElementById('eligibility')?.classList.add('z-0');
    document.getElementById('eligibility')?.classList.remove('z-40');
    document.getElementById('about-us')?.classList.add('z-0');
    document.getElementById('about-us')?.classList.remove('z-40');
    document.getElementById('workshops')?.classList.add('z-0');
    document.getElementById('workshops')?.classList.remove('z-40');
    document.getElementById('project')?.classList.add('z-0');
    document.getElementById('project')?.classList.remove('z-40');
    document.getElementById('quarter')?.classList.add('z-0');
    document.getElementById('quarter')?.classList.remove('z-40');
  }
  onShowModal() {
    this.toggleChatEvent.emit(false);
    this.showModal = true;
    document.body.classList.add('overflow-hidden');
  }

  onHideModal() {
    this.toggleChatEvent.emit(true);
    this.showModal = false;
    document.body.classList.remove('overflow-hidden');
  }

  openChat() {
    this.showChat = true;
  }

  toggleChatBtn() {
    this.showChat = !this.showChat;
  }

  changeChatState(state: boolean) {
    this.modalOpen = !state;
  }
 

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.checkIfAtBottom();
    this.isStickRegisterButtonVisible = window.scrollY > 600;
  }

  checkIfAtBottom(): void {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;
    this.isButtonAtBottom = scrollPosition + windowHeight + 5 >= fullHeight;
  }

  private spiedTags = ['DIV'];

  @Output() public sectionChange = new EventEmitter<string>();
  public currentSection: string = 'landing';

  @HostListener('document:mousewheel', ['$event'])
  onScroll(event: any) {
    let currentSection = '';
    const children = this._el.nativeElement.children;
    
    const top = event.target.scrollTop;
    const parentRect = event.target.getBoundingClientRect(); // Get the container's position relative to the viewport
    
    
    for (let i = 0; i < children.length; i++) {
      const element = children[i];
      const elementRect = element.getBoundingClientRect(); // Get the child element's position relative to the viewport
      if (this.spiedTags.some((spiedTag) => spiedTag === element.tagName)) {
        if (elementRect.top - parentRect.top <= top) {
          // Compare element's top position with container's top position
          currentSection = element.id;
          
        }
      }
    }

    
    if (currentSection !== this.currentSection) {
      if (currentSection !== '') this.currentSection = currentSection;
    }


    // For Partner button logic 
    const landingElement = this._el.nativeElement.querySelector('#landing');
    const landingOffsetTop = landingElement.offsetTop;
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const landingHeight = landingElement.offsetHeight;

    // Adjust the value based on your requirement
    const triggerPosition = landingOffsetTop + landingHeight - 100;

    this.showPartnerButton = scrollPosition > triggerPosition;
  }
  
}
