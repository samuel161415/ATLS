import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
// import { ShareButton } from 'ngx-sharebuttons/button';
// import { SlickCarouselConfig } from 'ngx-slick-carousel';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  constructor(private registerService: RegisterService) {

  }
  

  activeButton: string = '';
  images: string[] = [
    'https://res.cloudinary.com/eskalate/image/upload/v1714657507/Hackathon/Expo-min.png',
    'https://res.cloudinary.com/eskalate/image/upload/v1714657509/Hackathon/certificateDay-min.jpg',
    'https://res.cloudinary.com/eskalate/image/upload/v1700746297/Hackathon/yyeni.jpg',
    'https://res.cloudinary.com/eskalate/image/upload/v1703573932/Hackathon/Architect.jpg',
    'https://res.cloudinary.com/eskalate/image/upload/v1714657509/Hackathon/hackathon_coding-min.jpg'
  
    
  ];
  isMuted=true;
  // showChat = false;
  // showMentorsModal = false;
  // showAdvisorsModal = false;
  // mentorsRegistrationLink = 'https://form.typeform.com/to/UvayCDEJ';
  // advisorsRegistrationLink = 'https://form.typeform.com/to/mMzeQ63l';
  // showGetInvolvedModal = true;
  showTeamRegistrationModal = true;
  // showIndividualRegistrationModal = false;
  // showRegistrationModal = false;
  // currentSection: string = 'home';
  // registrationDeadline = new Date(2024, 5, 31, 23, 59, 59);
  // registrationButtonVisible = false;
  // countDownVisible = false;
  // countDownDate = new Date('2024-5-15T20:59:00');
  // animated: boolean = false;
  // @Output() toggleChatEvent = new EventEmitter<boolean>();

  slickConfig = {
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplaySpeed: 3000,
    autoplay: true,
    pauseOnHover : true,
    infinite : true,
    arrows : true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows : true,
          infinite : true,
          slidesToShow: 2,
          slideToScroll : 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows : true,
        }
      }
    ]
  };
  @Output() toggleChatEvent = new EventEmitter<boolean>();
  showModal: boolean = false;
  showChat = false;
  showMentorsModal = false;
  showAdvisorsModal = false;
 
  mentorsRegistrationLink = "https://form.typeform.com/to/ShJTk212"
  advisorsRegistrationLink = "https://form.typeform.com/to/opvWnrn7"
  showGetInvolvedModal = true;
  // showTeamRegistrationModal = false;
  showIndividualRegistrationModal = false;
  showRegistration2Modal = true;
  // passing links directly to the child is causig me error so I have thos use this name 

  advisorName = "advisor"
  mentorName = "mentor"
   shareData = {
    title: "MDN",
    text: "Learn web development on MDN!",
    url: "https://res.cloudinary.com/eskalate/image/upload/v1716850665/Hackathon-2024/Hackathon_Partner_With_Us.png",
  };
  sharedImgUrl: string = 'https://res.cloudinary.com/eskalate/image/upload/v1716850665/Hackathon-2024/Hackathon_Partner_With_Us.png';
  shareImgTitle: string = 'Hackathon Links!';
  shareText: string = 'https://res.cloudinary.com/eskalate/image/upload/v1716850665/Hackathon-2024/Hackathon_Partner_With_Us.png';
  // slideConfig = {
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 0,
  //   speed: 2500,
  //   pauseOnHover: false,
  //   cssEase: 'linear',
  //   responsive: [
  //     {
  //       breakpoint: 1280,
  //       settings: {
  //         slidesToShow: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 640,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // };
  onShowModal() {
    this.toggleChatEvent.emit(false);
    this.showModal = true;
    document.body.classList.add('overflow-hidden', 'z-0')
  }

  

  checkEligibility() {
    // this.registerService.checkEligibility();
    this.registerService.openModal();
    this.registerService.showEligibility();
  }


  onShowMentorsModal() {
    this.toggleChatEvent.emit(false);
    this.showMentorsModal = true;
    this.showGetInvolvedModal = false;
    document.body.classList.add('overflow-hidden', 'z-0')
    document.getElementById('prizes')?.classList.add('z-0')
    document.getElementById('prizes')?.classList.remove('z-40')
  }

  onShowAdvisorsModal(){
    this.toggleChatEvent.emit(false)
    this.showAdvisorsModal = true;
    this.showGetInvolvedModal = false;
    document.body.classList.add('overflow-hidden', 'z-0')
    document.getElementById('prizes')?.classList.add('z-0')
    document.getElementById('prizes')?.classList.remove('z-40')
  }

  onHideModal() {
    this.toggleChatEvent.emit(true)
    this.showModal = false;
    this.showGetInvolvedModal = true;
    this.showMentorsModal = false;
    this.showAdvisorsModal = false;
    document.body.classList.remove('overflow-hidden', 'z-0' )
    document.getElementById('prizes')?.classList.remove('z-0')
    document.getElementById('prizes')?.classList.add('z-40')
    document.getElementById('partners')?.classList.remove('hidden')
    document.getElementById('info')?.classList.remove('hidden')
    document.getElementById('judges')?.classList.remove('hidden')
    document.getElementById('eligibility')?.classList.remove('hidden')
    document.getElementById('about-us')?.classList.remove('hidden')
    document.getElementById('footer')?.classList.remove('hidden')
  }


  scrollDown(): void {
    const canNavigate: boolean = !document.body.classList.contains('overflow-hidden');
    const element = document.getElementById('prize2024');
    if (element != null && canNavigate) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }


  setActiveButton(buttonName: string, link: string) {
    this.activeButton = buttonName;
    window.open(link, '_blank');
  }
  // "ngx-slick-carousel": "^17.0.0",
  shareImage() {
    // navigator.canShare(shareData)
    if (navigator.share) {
      navigator.share({
        title: this.shareImgTitle,
        text: this.shareText,
        url: this.sharedImgUrl
      }).then(() => {
        console.log('Thanks for sharing!');
      }).catch((error) => {
        console.error('Error sharing:', error);
      });
    } else {
      this.fallbackShare();
    }

  }

  fallbackShare() {
    alert('Web Share API is not supported in this browser. Please use the share buttons below.');
  }
}
