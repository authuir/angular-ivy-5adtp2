import { Platform } from '@angular/cdk/platform';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  platforms: string;
  a: number = 10;

  constructor(private platformService: Platform) {
    this.platforms = JSON.stringify(this.platformService, null, 4).replace(
      /"|,/g,
      ''
    );
  }
}
