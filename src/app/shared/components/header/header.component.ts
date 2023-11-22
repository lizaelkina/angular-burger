import {Component} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private readonly iconRegistry: MatIconRegistry, private readonly sanitizer: DomSanitizer) {
    this.iconRegistry.addSvgIcon('burger-icon', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/burger-icon.svg'));
    this.iconRegistry.addSvgIcon('list-icon', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/list-icon.svg'));
    this.iconRegistry.addSvgIcon('profile-icon', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/profile-icon.svg'));
  }
}
