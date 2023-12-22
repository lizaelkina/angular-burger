import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent {

  constructor(private location: Location) {
  }

  goBack(): void {
    this.location.back();
  }
}
