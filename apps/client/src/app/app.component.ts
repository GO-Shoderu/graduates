import { Component } from '@angular/core';

@Component({
  selector: 'graduates-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'client';

  constructor() {
    console.log('Here we go');
  }
}
