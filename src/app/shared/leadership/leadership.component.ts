import { Component, Input, ViewChild, ElementRef } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

export interface Organizers {
  name: string;
  description: string;
  image: string;
}

@Component({
  selector: "app-leadership",
  templateUrl: "./leadership.component.html",
  styleUrls: ["./leadership.component.css"],
})
export class LeadershipComponent {
  @ViewChild('leadershipSection') leadershipSection!: ElementRef;

  showSpeakerCards = true;
  showPartnerCards = true
  speakers = [
    // {
    //   name: "Beimnet Bekele",
    //   description:
    //     "Meet Beimnet Bekele, an Aspiring Machine Learning Researcher and accomplished Software Engineer. With a keen interest in Machine Learning, Beimnet dedicates his time to exploring and advancing this cutting-edge field. His expertise spans across software engineering and machine learning, where he continually strives to innovate and contribute to the ever-evolving world of technology.",
    //   image:
    //     "https://res.cloudinary.com/eskalate/image/upload/v1722869427/team/bemni_hack.png",
    //   contact: "https://www.linkedin.com/in/beimnet-guta/",
    // },
    {
      name: "Yordanos Asmare",
      description:
        "Yordanos, a first-gen Ethiopian-American, brings a global perspective to her roles in community organizing, talent recruiting, and scaling companies. Passionate about breaking barriers, she collaborates with dreamers to foster inclusive teams. Outside of work, Yordanos enjoys warm weather, chocolate, music, soccer, and delving into philosophy and poetry.",
      image:
        "https://res.cloudinary.com/eskalate/image/upload/v1721895905/team/yordanos.jpg",
      contact: "https://www.linkedin.com/in/yordanost",
    },
    {
      name: "Emre Varol",
      description:
        "Emre, the distinguished CEO of A2SV, has a rich background including tenures at industry giants like Palantir and Google. He fervently strives to make a difference by bridging the gap between high-potential African students and transformative opportunities. His focus lies in fostering the next generation of African tech leaders.",
      image:
        "https://res.cloudinary.com/eskalate/image/upload/v1700745290/Hackathon/emre.png",
      contact: "https://www.linkedin.com/in/emre-varol/",
    },
    {
      name: "Elefelious Belay",
      description:
        "Elefelious G. Belay, an Assistant Professor of Software Engineering, brings 15+ years of industry, academia, and research experience. Recognized with research awards from Facebook, JPMorgan, IDRC/Carleton University, and more, he has held senior roles in the industry. Currently, he serves as the Dean of the School of Information Technology and Engineering at AAU.",
      image:
        "https://res.cloudinary.com/eskalate/image/upload/v1670689587/team/elefelious_bg.png",
      contact: "https://www.linkedin.com/in/elefelious-getachew-belay",
    },
    // {
    //   name: "Rediet Ferew",
    //   description:
    //     "Rediet, a software engineering student in the Artificial Intelligence stream, loves various aspects of her field. First, its flexibility allows her to apply it to real-life challenges across different domains. Second, it hones her problem-solving skills and broadens her perspectives. Third, being in-demand and remote-friendly, it offers convenience and opportunities for collaboration, fostering a strong team spirit.",
    //   image:
    //     "https://res.cloudinary.com/eskalate/image/upload/v1721895905/team/rediet4.png",
    //   contact: "https://www.linkedin.com/in/rediet-ferew-8a18b922a/",
    // },
    // {
    //   name: "Bethelhem Yemane",
    //   description:
    //     "Bethelhem is a passionate individual deeply fascinated by the world of software engineering. For her, the field's allure lies in the chance to exercise creativity and devise innovative solutions to real-life challenges, whether through automation, problem-solving, or entertainment.",
    //   image:
    //     "https://res.cloudinary.com/eskalate/image/upload/v1721895905/team/bethelhem4.png",
    //   contact: "https://www.linkedin.com/in/betabravah/",
    // },
    // {
    //   name: "Paulos Dessie",
    //   description:
    //     "Paulos Dessie finds software engineering to be the most exciting field, offering endless opportunities for learning and growth. He enjoys the challenges and innovations at the forefront of technology. In his free time, Paulos loves playing basketball for the teamwork and strategy, and watching movies for the storytelling. These activities provide a perfect balance to his work, helping him relax and recharge.",
    //   image:
    //     "https://res.cloudinary.com/eskalate/image/upload/v1721895905/team/paulos4.png",
    //   contact: "https://www.linkedin.com/in/paulos-nedaw-a22207235/",
    // },
    // {
    //   name: "Nathnael Dereje",
    //   description:
    //     "Natnael, a dedicated software engineering student at AAiT, finds fulfillment in the field's pivotal role in solving societal problems and simplifying lives through digitalization. With a laptop and a code editor, he is captivated by the endless possibilities of building innovative solutions.",
    //   image:
    //     "https://res.cloudinary.com/eskalate/image/upload/v1721895905/team/nathaniel4.png",
    //   contact: "https://www.linkedin.com/in/nathnael-dereje/",
    // },

    // {
    //   name: "Amanuel Alehegne",
    //   description:
    //     "Amanuel Alehegn's love for mathematics, puzzles, and problem-solving has naturally led him to a career in software engineering, where logic and math come to life. He believes technology can solve almost any challenge, with software as the soul of machines. His passion for AI and machine learning drives his ambition to be at the forefront of the coming Artificial General Intelligence (AGI) revolution.",
    //   image:
    //     "https://res.cloudinary.com/eskalate/image/upload/v1722863506/team/aman_astu4.png",
    //   contact: "https://www.linkedin.com/in/amanuel-alehegne/",
    // },
  ];

  partners = [
    {
      name: 'Addis Ababa Institute of Technology (AAIT)',
      description:
        'AAU contributes by bringing prominent academics and facilitating participation from leaders of other African universities, fostering a continent-wide academic collaboration.',
      role: 'Academic Participation & Regional Engagement',
      image: 'assets/aait_c.png', // Replace with actual path to the image
      link: 'https://www.aau.edu.et/' // Website link
    },
    {
      name: 'Ethiopian Government',
      description:
        'The government supports the summit by inviting international ministers for a pan-African collaboration, securing the prestigious Adwa Museum venue, and managing visa and accommodation arrangements for international guests.',
      role: 'Diplomatic Engagement & Logistical Support',
      image: 'assets/gov_c.png', // Replace with actual path to the image
      link: 'https://ethiopianembassy.org/government/' // Website link
      // https://ethiopianembassy.org/government/
    },
    {
      name: 'Ethiopian Artificial Intelligence Institute (EAII)',
      description:
        'These entities offer support for winning projects, including funding and mentorship, and engage with Ethiopia’s local tech sector, enhancing the summit\'s impact on innovation and technological growth.',
      role: 'Innovation Support & Sector Engagement',
      image: 'assets/eaii_c.png', // Replace with actual path to the image
      link: 'https://eaii.gov.et/' // Website link
    }
  ]

  setLinks(link: string) {
    window.open(link, "_blank");
  }

  toggleSpeakerCards() {
    this.showSpeakerCards = !this.showSpeakerCards; // Toggle the visibility
    if (this.showSpeakerCards) {
      setTimeout(() => {
        this.scrollToSpeakerCardsSection();
      }, 0);
    }
  }

  togglePartnerCards() {
    this.showPartnerCards = !this.showPartnerCards; // Toggle the visibility
    if (this.showPartnerCards) {
      setTimeout(() => {
        this.scrollToPartnerCardsSection();
      }, 0);
    }
  }

  scrollToSpeakerCardsSection() {
    this.leadershipSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
  scrollToPartnerCardsSection() {
    this.leadershipSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
