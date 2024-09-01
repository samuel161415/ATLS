import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkOpenerService {

  constructor() { }
  openLinkInNewTab(link: string): void {
    window.open(link, '_blank');
  }
}
