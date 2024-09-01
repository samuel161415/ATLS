import { Component, ViewChild, ElementRef } from "@angular/core";
import { CommonModule } from "@angular/common";

export interface Organizers {
  name: string;
  description: string;
  image: string;
}

@Component({
  selector: "app-organizers",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./organizers.component.html",
  styleUrl: "./organizers.component.css",
})
export class OrganizersComponent {
  tickets = [
    {
      title: "Expo Hall (live) ticket",
      price: "Free",
      features: ["Access to Expo Hall for 2 days"]
    },
    {
      title: "Student Ticket (virtual)",
      price: "Free",
      features: ["Access to YouTube link for livestream of October 14th: Workshops"]
    },
    {
      title: "General Ticket",
      price: "$10",
      features: ["Jury Pitches", "Leadership Sessions", "Closing Ceremony", "Access to All Attendees"]
    },
    {
      title: "Investor Ticket",
      price: "$100",
      features: ["Investor Pitches", "Leadership Sessions", "Closing Ceremony", "Meet and Greets with Startups of choosing"]
    }
  ];
}


/*
 "Bethelhem is a passionate individual deeply fascinated by the world of software engineering.",
    "For her, the field's allure lies in the chance to exercise creativity and devise innovative solutions to real-life challenges, whether through automation, problem-solving, or entertainment. Collaboration is another aspect she finds thrilling, relishing the opportunity to work alongside like-minded enthusiasts to achieve common objectives.\n\nWith competitive programming, development, and communication skills, Bethelhem aspires to continuously improve as a programmer and problem solver. Her drive to become better in her craft fuels her dedication to the software engineering journey."
   */