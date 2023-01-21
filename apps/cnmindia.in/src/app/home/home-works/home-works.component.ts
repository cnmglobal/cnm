import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '@cnm/ui';

@Component({
  selector: 'cnm-home-works',
  standalone: true,
  imports: [CommonModule, UiModule],
  templateUrl: './home-works.component.html',
  styles: [],
})
export class HomeWorksComponent {
  worksShort = [{
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
    caption: 'Digital Marketing'
  },
]
}
