import { Component } from '@angular/core';


export interface Attendee {
  attendees_name: string;
  description: string;
}

@Component({
    selector: 'app-why-attend',
    templateUrl: './why-attend.component.html',
    styleUrls: ['./why-attend.component.css'],
  })
  export class WhyAttendComponent {

    attends: Attendee[] = [
      {
        attendees_name: "Students, Innovators, and Aspiring Entrepreneurs",
        description: 'This is your chance to connect with peers, mentors, and industry leaders from across the continent. Gain insights into the latest trends in tech and entrepreneurship, learn from success stories, and present your ideas to potential investors. ATLS is where you can find inspiration, collaboration opportunities, and resources to take your ideas to the next level.'
      },
      {
        attendees_name: "Policy Makers and Development Leaders",
        description : "Be at the forefront of Africa's digital transformation. This summit provides a platform to discuss policy, innovation, and strategies to foster tech ecosystems. Engage with emerging leaders and entrepreneurs to understand their needs and challenges, and collaborate on initiatives that can drive sustainable development through technology."
      },
      {
        attendees_name: "Global Talent and Business Leaders",
        description : "Discover the next wave of African talent and startups poised to make an impact on the global stage. Whether you're looking to diversify your talent pool, explore new business opportunities, or gain insights into Africa's tech landscape, ATLS offers the perfect environment to network, recruit, and collaborate with some of the brightest minds in the industry."
      },
      {
        attendees_name: "Impact Investors and Venture Capitalists",
        description : "Get a front-row seat to the future of Africa's tech industry. Meet promising startups, hear innovative pitches, and discover investment opportunities that can drive substantial returns while contributing to the continent's economic growth. ATLS is where visionary investors can connect with groundbreaking ideas and the people who will bring them to life."
      }
      
    ];
   }