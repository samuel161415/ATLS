import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  setActiveButton(buttonName: string, link: string) {
    window.open(link, '_blank');
  }
}
