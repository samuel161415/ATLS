import {Component, EventEmitter, Input, Output} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-mentors-registration',
  templateUrl: './mentors-registration.component.html',
  styleUrls: ['./mentors-registration.component.css']
})
export class MentorsRegistrationComponent {
  @Input() showModal: boolean = false;
  @Input() registrationLink: string = "";
  @Output() closeModalEvent = new EventEmitter<void>();
  isIframeLoading: boolean = true;

  sanitizedUrl: SafeResourceUrl | undefined;

  constructor(private sanitizer: DomSanitizer) {

  }

  ngOnChanges() {
    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.registrationLink);
  }

  getSafeRegistrationLink(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.registrationLink);
  }

  closeModal(){
    this.closeModalEvent.emit()
    this.isIframeLoading = true;
  }
  onIframeLoad() {
    this.isIframeLoading = false;
  }
}
