import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-team-registration',
  templateUrl: './team-registration.component.html',
  styleUrls: ['./team-registration.component.css']
})
export class TeamRegistrationComponent {
  @Input() showModal: boolean = false;
  @Output() closeModalEvent = new EventEmitter<void>();
  isIframeLoading: boolean = true;

  closeModal(){
    this.closeModalEvent.emit()
    this.isIframeLoading = true;
  }
  onIframeLoad() {
    this.isIframeLoading = false;
  }
}
