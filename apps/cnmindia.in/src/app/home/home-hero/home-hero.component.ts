import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Common } from '@cnm/util';
@Component({
  selector: 'cnm-home-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-hero.component.html',
  styles: [],
})
export class HomeHeroComponent {
  homeImages = [
    {
      img: '1.jpg',
      caption: 'Branding'
    },
    {
      img: '2.jpg',
      caption: 'Package Design'
    },
    {
      img: '3.jpg',
      caption: 'Digital Marketing'
    },
    {
      img: '4.jpg',
      caption: 'Brochure Design'
    },
    {
      img: '5.jpg',
      captiion: 'App Development'
    },
    {
      img: '6.jpg',
      caption: 'SEO Optimization'
    },
    {
      img: '1.jpg',
      caption: 'Branding'
    },
    {
      img: '2.jpg',
      caption: 'Package Design'
    },
    {
      img: '3.jpg',
      caption: 'Digital Marketing'
    },
    {
      img: '4.jpg',
      caption: 'Brochure Design'
    },
    {
      img: '5.jpg',
      captiion: 'App Development'
    },
    {
      img: '6.jpg',
      caption: 'SEO Optimization'
    },
    {
      img: '1.jpg',
      caption: 'Branding'
    },
    {
      img: '2.jpg',
      caption: 'Package Design'
    },
    {
      img: '3.jpg',
      caption: 'Digital Marketing'
    },
  ];

  flip = false;
  flipID = 0;
  common = new Common();
  showCNM = false;
  constructor() {
    setTimeout(() => {
      this.showCNM = true;
    }, 100);
    this.flipIt()
  }

  flipIt() {
    this.flipID = this.common.randomIntFromInterval(1, this.homeImages.length - 1)
    this.flip = !this.flip;
    console.log(this.flip)
    setTimeout(() => {
      this.flipIt()
    }, 1200);
  }
}
