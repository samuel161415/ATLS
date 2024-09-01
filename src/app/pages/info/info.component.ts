import { Component } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

export interface Step{
  number: string,
  title: string,
  description: string | null,
  date: string,
}
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  constructor(public sanitizer: DomSanitizer){
  }

  steps = [
    {
        number: '1',
        title: "Expo Hall",
        description: "Featuring AI for Impact Hackathon Finalists, Core Dev Projects, Ethiopian Startups, Corporate Sponsor Booths from 11:00 am to 6:00 pm",
        date: "12-13 October, 2024",
        final: false
    },
    {
        number: '2',
        title: "Technical and Entrepreneurial Workshops",
        description: "2:00pm Opening Remarks Workshop, 2:30 pm Workshop 1, 3:00pm - 8:00pm Investor Pitches from Finalists and CoreDev, 4:00pm Workshop 2, 5:00pm Workshop 3",
        date: "14 October, 2024",
        final: false
    },
    {
        number: '3',
        title: "Workshops and Leadership Sessions",
        description: "2:00pm Workshop 4, 3:00pm Leadership Session & Day 1 Welcome for General Audience, 3:30pm Leadership Session, 5:00pm - 7:00pm Jury Pitches from CoreDev, 7:00pm Leadership Session Day 1 wrap up, 8:00pm General dinner",
        date: "15 October, 2024",
        final: false
    },
    {
        number: '4',
        title: "Leadership Sessions and Finale Ceremony",
        description: "3:00pm Leadership Session & Day 2 Welcome for General Audience, 3:30pm - 6:00pm Jury Pitches from Finalists, 7:00pm Closing Ceremony and Winners, 8:00pm VIP dinner",
        date: "16 October, 2024",
        final: false
    }
];

  calendarLink = "https://calendar.google.com/calendar/u/0?cid=Y18wYjU0ZmZlYjIxZWFjYmNiNTZiM2RhNzkwNzMyYmY5MTg4OTdkNWJjODQzMTJlMWI3YmUzOTlmYjFhN2QzYTFlQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20"

  workshops = [
    {title: "AI", description: "Learn about the basics of AI and how it can be used to solve real-world problems.", author: "Dr. David Moinina Sengeh", authorDescription: "Chief Innovation Officer, Government of Sierra Leone", link: this.sanitizer.bypassSecurityTrustUrl("https://www.youtube.com/embed/7FlRWgVGmUA?si=M_80yBftxegmGaUz")},
    {title: "Hackathon Dynamics", description: "Learn about the basics of AI and how it can be used to solve real-world problems.", author: "Dr. David Moinina Sengeh", authorDescription: "Chief Innovation Officer, Government of Sierra Leone", link: this.sanitizer.bypassSecurityTrustUrl("https://www.youtube.com/embed/7FlRWgVGmUA?si=M_80yBftxegmGaUz")},
    {title: "Idea Generation", description: "Learn about the basics of AI and how it can be used to solve real-world problems.", author: "Dr. David Moinina Sengeh", authorDescription: "Chief Innovation Officer, Government of Sierra Leone", link: this.sanitizer.bypassSecurityTrustUrl("https://www.youtube.com/embed/7FlRWgVGmUA?si=M_80yBftxegmGaUz")},
  ]

  setActiveButton(buttonName: string, link: string) {
    window.open(link, '_blank');
  }
}
