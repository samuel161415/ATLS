import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-get-involved',
  templateUrl: './get-involved.component.html',
  styleUrls: ['./get-involved.component.css']
})
export class GetInvolvedComponent {
  @Output() openBeMentorModal = new EventEmitter();
  @Output() openBeAdvisorModal = new EventEmitter();

  toggleBeMentorModal() {
    this.openBeMentorModal.emit();
  }
  toggleBeAdvisorModal() {
    this.openBeAdvisorModal.emit();
  }
}
