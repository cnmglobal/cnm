import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cnm-home-work-with-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-work-with-us.component.html',
  styles: [],
})
export class HomeWorkWithUsComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }


  scrollColorChange() {
    const [red, green, blue] = [69, 111, 225]
    const section = document.querySelector('.work-with-us') as HTMLElement;
    const y = 1 + (window.scrollY || window.pageYOffset) / 150
    const [r, g, b] = [red / y, green / y, blue / y].map(Math.round)
    section.style.setProperty('bg-color',`rgb(${r}, ${g}, ${b})`)
  }

}
