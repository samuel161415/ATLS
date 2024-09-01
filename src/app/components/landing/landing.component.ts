import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
// import { RegisterService } from 'src/app/services/register.service';
// import { ShareButton } from 'ngx-sharebuttons/button';
// import { SlickCarouselConfig } from 'ngx-slick-carousel';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  videoSrc = 'https://res.cloudinary.com/eskalate/video/upload/v1725195587/video/atls_compressed.mp4';
  videoElement: HTMLVideoElement | undefined;
  playing = false;

  // togglePlay(): void {
  //   if (!this.videoElement) return;
  //   if (this.videoElement.paused) {
  //     this.videoElement.play();
  //     this.playing = true;
  //   } else {
  //     this.videoElement.pause();
  //     this.playing = false;
  //   }
  // }

  // onVideoEvent(event: Event): void {
  //   this.videoElement = event.target as HTMLVideoElement;
  // }
  

 
  isMuted=true;
  
  @Output() toggleChatEvent = new EventEmitter<boolean>();
 
  


  scrollDown(): void {
    const canNavigate: boolean = !document.body.classList.contains('overflow-hidden');
    const element = document.getElementById('prize2024');
    if (element != null && canNavigate) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }


  setActiveButton(buttonName: string, link: string) {
    
    window.open(link, '_blank');
  }
  

 
}
