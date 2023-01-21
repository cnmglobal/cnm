import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiModule } from '@cnm/ui';

@Component({
  standalone: true,
  selector: 'cnm-root',
  imports:[UiModule, RouterModule],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'cnmindia.in';
  activeRoute = '/';
}
