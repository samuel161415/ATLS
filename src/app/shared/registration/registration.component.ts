import {Component, EventEmitter, Input, Output} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  
})
export class RegistrationComponent {
  constructor(private sanitizer: DomSanitizer) {

  }
  @Input() showModal: boolean = false;
  @Input() registrationLink: string = "";
  @Input() comingName: string = "";
  @Output() closeModalEvent = new EventEmitter<void>();
  isIframeLoading: boolean = true;
  sanitizedUrl: SafeResourceUrl | undefined;
  showShareModal = false;
  telegramSharingLink= "https://t.me/share/url?url=https://res.cloudinary.com/eskalate/image/upload/v1718181258/Hackathon-2024/Hackathon_Registration_Card.png&text=I've%20just%20registered%20for%20the%20A2SV%20Hackathon!%20Join%20me%20and%20share%20your%20own%20registration!%20https://hackathon.a2sv.org"
  linkedinSharingLink= "https://www.linkedin.com/sharing/share-offsite/?url=https://res.cloudinary.com/eskalate/image/upload/v1718181258/Hackathon-2024/Hackathon_Registration_Card.png&summary=I've%20just%20registered%20for%20the%20A2SV%20Hackathon!%20Join%20me%20and%20share%20your%20own%20registration!%20https://hackathon.a2sv.org"
  twitterSharingLink= "https://twitter.com/intent/tweet?url=https://res.cloudinary.com/eskalate/image/upload/v1718181258/Hackathon-2024/Hackathon_Registration_Card.png&text=I've%20just%20registered%20for%20the%20A2SV%20Hackathon!%20Join%20me%20and%20share%20your%20own%20registration!%20https://hackathon.a2sv.org"
  facebookSharingLink= "https://www.facebook.com/sharer/sharer.php?u=https://res.cloudinary.com/eskalate/image/upload/v1718181258/Hackathon-2024/Hackathon_Registration_Card.png&t=I've%20just%20registered%20for%20the%20A2SV%20Hackathon!%20Join%20me%20and%20share%20your%20own%20registration!%20https://hackathon.a2sv.org"
  instagramSharingLink = "https://www.instagram.com/?url=https://res.cloudinary.com/eskalate/image/upload/v1718181258/Hackathon-2024/Hackathon_Registration_Card.png&text=I've%20just%20registered%20for%20the%20A2SV%20Hackathon!%20Join%20me%20and%20share%20your%20own%20registration!%20https://hackathon.a2sv.org"
  buttonText: string = 'Copy Text';
  isButtonDisabled: boolean = false;
  buttonClass: string = 'btn bg-purple-700 mt-4';


  ngOnChanges() {
    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.registrationLink);
  }
  getSafeRegistrationLink(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.registrationLink);
  }
  setActiveButton(buttonName: string, link: string) {
    window.open(link, '_blank');
  }

  closeModal(){
   this.closeModalEvent.emit()
   this.isIframeLoading = true;

    const shareModal = window.document.getElementById('share_modal') as HTMLDialogElement;
    shareModal?.showModal();
    this.showShareModal = true;
  }
  closeForReal(){
    const shareModal = window.document.getElementById('share_modal') as HTMLDialogElement;
    shareModal?.close();
    this.showShareModal = false;
    // this.isIframeLoading = true;
    // this.closeModalEvent.emit();
  }
  onIframeLoad() {
    this.isIframeLoading = false;
  }
  copyText() {
    const textarea = document.getElementById('shareText') as HTMLTextAreaElement;
    if (textarea) {
      navigator.clipboard.writeText(textarea.value).then(() => {
        this.buttonText = 'Text is copied';
        this.isButtonDisabled = true;
        this.buttonClass = 'btn mt-4 bg-purple-300';
        // Enable the button again after 5 seconds
        setTimeout(() => {
          this.buttonText = 'Copy Text';
          this.isButtonDisabled = false;
          this.buttonClass = 'btn bg-purple-700 mt-4';
        }, 5000);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    }
  }
}
