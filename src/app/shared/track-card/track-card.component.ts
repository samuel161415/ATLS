import {Component, Input} from '@angular/core';

export interface Attendee {
  attendees_name: string;
  description: string;
}
@Component({
  selector: 'app-track-card',
  templateUrl: './track-card.component.html',
  styleUrls: ['./track-card.component.css']
})
export class TrackCardComponent {
  @Input() attend: Attendee | undefined;
  
}
