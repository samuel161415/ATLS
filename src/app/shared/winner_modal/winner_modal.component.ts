import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-winner_modal',
  templateUrl: './winner_modal.component.html',
  styleUrls: ['./winner_modal.component.css'],
})
export class WinnerModal {
  @Input() showModal: boolean = false;
  @Input() modalData: any = {};
  @Output() closeModalEvent = new EventEmitter<boolean>();

  constructor(private sanitizer: DomSanitizer) {}

  getSanitizedUrl(url: string): SafeUrl {
    
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  setLinks(link: string) {
    window.open(link, "_blank");
  }

  closeModal() {
    this.closeModalEvent.emit(true);
  }
}
