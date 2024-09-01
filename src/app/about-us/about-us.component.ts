import { Component } from "@angular/core";

export interface AboutUsContent {
  title: string;
  description1: string;
  description: string;
  image: string;
  footer?: string;
}

@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.css"],
})
export class AboutUsComponent {
  contents: AboutUsContent[] = [
    {
      title: "About A2SV",
      description:
        "A2SV (Africa to Silicon Valley), a hub of innovation in the field of technology education, is a US-based nonprofit academy empowering Africa's tech revolution. With a unique blend of comprehensive software engineering training and tech-driven solutions, A2SV is more than an academy; it's a movement.",
      image: "assets/group_photo1.jpg",
      footer: "https://www.a2sv.org",
      description1:
        "Through collaborations with esteemed African universities like Addis Ababa University and the University of Ghana, and partnerships with tech titans such as Google, Meta, and Databricks, A2SV has created a thriving ecosystem for emerging talent since 2019. Our program is absolutely free, breaking down financial barriers, nurturing dreams, and democratizing the path to a tech-driven future.",
    },
  ];
  setActiveButton(buttonName: string, link: string) {
    window.open(link, "_blank");
  }
}
