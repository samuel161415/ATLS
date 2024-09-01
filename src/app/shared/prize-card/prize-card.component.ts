import { Component, Input } from '@angular/core';

export interface Prize {
  place: string,
  prize: string,
  padding: string,
  color: string,
  image: string,
  awards: string[]
}
@Component({
  selector: 'app-prize-card',
  templateUrl: './prize-card.component.html',
  styleUrls: ['./prize-card.component.css']
})
export class PrizeCardComponent {
  @Input() prize: Prize | undefined;
}
