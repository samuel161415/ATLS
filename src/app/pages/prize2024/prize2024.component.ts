import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

export interface Workshop {
  title: string;
  description: string;
  author: string;
  authorDescription: string;
}


@Component({
  selector: 'app-prize2024',
  templateUrl: './prize2024.component.html',
  styleUrls: ['./prize2024.component.css']
})

export class Prize2024Component {
  constructor(private sanitizer: DomSanitizer) {
  }
  
  awards = [
    "Trip to Addis Ababa, including airfare, hotel, food and other expenses.",
    "Opportunity to pitch one's project idea to renowned tech individuals and venture capitalists.",
    "Certificate of achievement."
  ]
  missionTextPart1 = "A2SV (Africa to Silicon Valley) is a US-based nonprofit academy igniting Africa's tech revolution with comprehensive software engineering training and tech-driven solutions"
  missionTextPart2 = "Through collaborations with top African universities and tech titans, A2SV has created a thriving ecosystem for emerging talent since 2019. Our program is free, breaking financial barriers, nurturing dreams, and democratizing the path to a tech-driven future."
  secondPrize = {
    place: 'Second',
    prize: '6,000',
    padding: '32px',
    color: '#FFC876',
    image: 'assets/silver 1 (no bg).png',
    awards: [...this.awards, "Custom-designed A2SV swag."]
  }
   firstPrize = {
    place: 'First',
    prize: '10,000',
    padding: '32px',
    color: '#AC6AFF',
    image: 'assets/gold 1 (no bg).png',
    awards: [...this.awards,"Direct placement opportunity in the A2SV education cohort 6.", "Custom-designed A2SV swag."]
    }

    thirdPrize = {
    place: 'Third',
    prize: '4,000',
    padding: '32px',
    color: '#E298FF',
    image: 'assets/bronze 1.png',
    awards: this.awards
    }

    tracks = [
      {
        title: 'Best Technical Implementation Award',
        description: 'Recognizes the project with the most impressive and innovative technical implementation.',
        prize: '2500',
      },
      {
        title: 'Most Potential for Positive Change Award',
        description: 'Highlights the project that shows the greatest potential for making a positive impact and driving change.',
        prize: '2500',
      },
      {
        title: 'Best User Experience Award',
        description: 'Rewards the project that delivers an exceptional and intuitive user experience.',
        prize: '2500',
      },
      {
        title: 'Cross-Domain Collaboration Award',
        description: 'Acknowledges teams that effectively combine AI techniques with expertise from different fields.',
        prize: '2500'
      }
    ];

    prizes = [this.secondPrize, this.firstPrize, this.thirdPrize];
    @ViewChild('cardsSection') cardsSection!: ElementRef;
    @Input() workshop: Workshop | undefined;
    showCards = false; // Initialize as true
  
   
  
    workshops_lists: any[] = [
      { title: "UI Design and Styling ", description: "Join us and understand the principles of user experience (UX) design and learn how to create user-friendly interfaces while staying updated with the latest trends in UI design. This workshop will focus on designing with the user in mind to enhance usability and satisfaction, and provide insights into modern visual design practices, including color theory, typography, and responsive design.", src: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/t7WsFtUGTqE?si=OMPabAqBPqphZUTX") },
      { title: "Project Management Tools", description: "Join us as this workshop will introduce essential tools and techniques for effective collaboration. Learn about project management tools that can streamline teamwork and enhance productivity.", src:this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/TS61L2gXb68?si=bVgw6gwzJfM7DDat") },
      { title: "Generative AI and its Applications", description: "Join us and explore the various application areas of Large Language Models (LLMs) in different sectors such as environment, commerce, health, education, and more. This comprehensive workshop will delve into real-world examples and case studies demonstrating the transformative impact of LLMs across various industries.",src: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/gYxDZ3N7uwA?si=xgO1wkqORkLhlbdO") },
      { title: "Pitching and Presentation Skills", description: "Learn how to craft compelling pitches that attract investment, including storytelling techniques and presentation skills. This workshop will help you refine your pitch to make a memorable impact on your audience.", src : this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/fjar3OI2HJs?si=wLFzGbgst8yhg1bE") },
      { title: "Hackathon Dynamics", description: "Join us and learn strategies for building strong, collaborative teams and managing team dynamics during a hackathon. This workshop will cover best practices for teamwork, communication, conflict resolution, and maximizing productivity.", src : this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/prTJSU2kqzI?si=1B9sItjD-hNZbwJA")},
      { title: "Project Idea Submission", description: "Join us and learn about the Project Idea Submission Phase and what is expected from you. This workshop is a great opportunity to learn, ask questions, and get feedback on your project ideas from experienced mentors.", src : this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/XNTJpjX8i00?si=1B9sItjD-hNZbwJA.")}
    ];
  
    toggleCards() {
      this.showCards = !this.showCards; // Toggle the visibility
      if (this.showCards) {
        setTimeout(() => {
          this.scrollToCardsSection();
        }, 0);
      }
    }
  
    scrollToCardsSection() {
      console.log("scrool to section");
      
      this.cardsSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
}