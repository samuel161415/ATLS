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
 
  isMuted=true;
  
  @Output() toggleChatEvent = new EventEmitter<boolean>();
  showThumbnail = true;

  // ViewChild to reference the video element
  @ViewChild('videoPlayer', { static: false }) videoPlayer!: ElementRef<HTMLVideoElement>;

  // Method to play the video and hide the thumbnail
  playVideo() {
    this.showThumbnail = false; // Hide the thumbnail
    const video: HTMLVideoElement = this.videoPlayer.nativeElement;
    video.play(); // Play the video
  }
  scrollDown(): void {
    const canNavigate: boolean = !document.body.classList.contains('overflow-hidden');
    const element = document.getElementById('why-attend');
    if (element != null && canNavigate) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToSection(sectionId: string): void {
    const canNavigate: boolean =
      !document.body.classList.contains("overflow-hidden");
    const element = document.getElementById(sectionId);
    if (element != null && canNavigate) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  setActiveButton(buttonName: string, link: string) {
    
    window.open(link, '_blank');
  }
  

 
}
