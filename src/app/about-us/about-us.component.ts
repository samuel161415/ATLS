import { Component } from "@angular/core";

export interface AboutUsContent {
  title: string;
  // description1: string;
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
      title: "About ATLS",
      description:
        "The A2SV Annual Africa Tech Leadership Summit is a transformative event that brings together Africa’s most talented tech professionals and global industry leaders. This summit is a unique platform where collaboration is key—top African talent, educators, philanthropists, and investors come together to explore innovative solutions that can drive socio-economic development across the continent. Key highlights of the summit include the launch of core development projects, a vibrant career fair, engaging investor pitch panels, and showcases from our continent-wide hackathon.",
      image: "assets/group_photo1.jpg",
      footer: "https://www.a2sv.org",
      // description1: "Through collaborations with esteemed African universities like Addis Ababa University and the University of Ghana, and partnerships with tech titans such as Google, Meta, and Databricks, A2SV has created a thriving ecosystem for emerging talent since 2019. Our program is absolutely free, breaking down financial barriers, nurturing dreams, and democratizing the path to a tech-driven future.",
    },
  ];
  setActiveButton(buttonName: string, link: string) {
    window.open(link, "_blank");
  }
}
