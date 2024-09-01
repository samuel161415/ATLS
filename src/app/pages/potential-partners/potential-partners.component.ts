import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-potential-partners',
  templateUrl: './potential-partners.component.html',
  styleUrls: ['./potential-partners.component.css'],
})
export class PotentialPartnersComponent {
  slides = [
    { img: 'assets/Google_logo.svg' },
    { img: 'assets/Bloomberg_logo.svg' },
    { img: 'assets/Palantir_Technologies_logo%201.svg' },
    { img: 'assets/Databricks_logo.svg' },
    { img: 'assets/Meta_logo.svg' },
  ];

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 2500,
    pauseOnHover: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoplay:true,
    autoplayTimeout:2500,
    autoplaySpeed: 2000,
    autoplayHoverPause:true,
    dots: false,
    // navSpeed: 700,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    }
  }
}
// '#gallery').slick({
//   slidesToShow: 6,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 0,
//   speed: 8000,
//   pauseOnHover: false,
//   cssEase: 'linear'
