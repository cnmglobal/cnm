import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeroComponent } from './home-hero/home-hero.component';
import { HomeWorksComponent } from './home-works/home-works.component';
import { HomeWorkWithUsComponent } from './home-work-with-us/home-work-with-us.component';

@Component({
  selector: 'cnm-home',
  standalone: true,
  imports: [CommonModule, HomeHeroComponent, HomeWorksComponent, HomeWorkWithUsComponent],
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {

}
