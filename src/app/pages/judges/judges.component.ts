import { Component } from '@angular/core';

export interface Judge {
  name: string;
  title: string;
  image: string;
}
@Component({
  selector: 'app-judges',
  templateUrl: './judges.component.html',
  styleUrls: ['./judges.component.css'],
})
export class JudgesComponent {
  judges = [
    {
      name: 'Alper Güçer',
      title:
        'Alper is a digital marketing expert, Managing Partner at Poligon Interactive, with more than 25 years of expertise in digital marketing. His extensive roles also include serving as a consultant, Client Engagement Director, as well as acting as a strategic influencer and mentor.',
      image: 'https://res.cloudinary.com/eskalate/image/upload/v1700743897/Hackathon/Alper.png',
      contact: 'https://www.linkedin.com/in/alpergucer/',
    },
    {
      name: 'Emre Varol',
      title:
        'Emre, the distinguished CEO of A2SV, has a rich background including tenures at industry giants like Palantir and Google. He fervently strives to make a difference by bridging the gap between high-potential African students and transformative opportunities. His focus lies in fostering the next generation of African tech leaders.',
      image: 'https://res.cloudinary.com/eskalate/image/upload/v1700745290/Hackathon/emre.png',
      contact: 'https://www.linkedin.com/in/emre-varol/',
    },
    {
      name: 'Jelani Nelson',
      title:
        'Jelani Nelson is an Ethiopian-American computer scientist and Professor of Electrical Engineering and Computer Sciences at the University of California, Berkeley. He is known for his work on streaming algorithms and dimensionality reduction, and is the creator of AddisCoder, a computer science summer program for Ethiopian high school students.',
      image: 'https://res.cloudinary.com/eskalate/image/upload/v1700743933/Hackathon/Jelani.png',
      contact: 'https://www.linkedin.com/in/minilek/',
    },
    {
      name: 'Ricardo Baeza Yates',
      title:
        'Ricardo is a seasoned Research Director at the Institute for Experiential AI at Northeastern University, is known for his extensive contributions to the field. His past experiences include serving as the Chief Technology Officer for NTENT. Additionally, he has made significant academic contributions throughout his career as a professor.',
      image: 'https://res.cloudinary.com/eskalate/image/upload/v1700743951/Hackathon/Recardo.png',
      contact: 'https://www.linkedin.com/in/ricardobaezayates/',
    },
    {
      name: 'Solomon Kasssa',
      title:
        'Founder, 1888EC | Senior Tech Strategist | Author | TV Personality | Public Speaker\n\nShort Bio:\nIn his professional career, Solomon worked as senior technology consultant & strategist at a Fortune 500 Global Firm leading multi-million-dollar large technology implementations. He worked as a software engineer prior to joining management consulting. He is also a producer and host of the popular “TechTalk With Solomon” on EBS with millions of viewers.\n\nIn 2020, he founded 1888EC, a tech startup venture studio in Addis Ababa, Ethiopia.\n\nIn 2018, Solomon published “The Wonder of SciTech” – the first-of-its-kind science & tech 400 pages book to be ever published in Amharic language with more 45,000 copies sold. \n\nSolomon is a social media influencer with more than 1.7 million followers.',
      image: 'https://res.cloudinary.com/eskalate/image/upload/v1700845238/Hackathon/solomon_kassa.jpg',
      contact: 'https://www.linkedin.com/in/solomonkassa/',
    },

    // {name: 'Roger Kirwin', title: 'Roger, an accomplished tech executive, board member, and angel investor, is currently contributing his expertise at Square. His impressive career history includes roles at Zendesk, Salesforce, and Sprint. He is driven by a passion to instigate positive change and empower budding entrepreneurs.', image: 'assets/Roger.jpg'},
    // {name: 'Tugrul Tekbulut', title:'Tugrul is a seasoned Chairman and Founder of Timus Networks and also holds the Chairman position at LOGO Yazılım, Southeast Europe\'s largest ISV. His previous roles include serving as the Chairman at TUBISAD. He has notable expertise in Business Planning, Enterprise Software, E-commerce, Entrepreneurship, and CRM.', image: 'assets/turgul.png'},
    // {name: 'Valeria Vulpe', title: 'Valeria is an accomplished data scientist with a notable career spanning over 8 years, including a remarkable tenure at Google. She has also showcased her analytical prowess in the financial sector, serving as a Business Analyst at Deutsche Bank. She brings a wealth of experience in leveraging data to drive strategic business decisions.', image: 'assets/Valeria Vulpe.jpg'},
  ];
}
