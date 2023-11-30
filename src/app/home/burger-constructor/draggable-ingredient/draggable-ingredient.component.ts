import { Component } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-draggable-ingredient',
  templateUrl: './draggable-ingredient.component.html',
  styleUrls: ['./draggable-ingredient.component.scss']
})
export class DraggableIngredientComponent {

  constructor(private readonly iconRegistry: MatIconRegistry, private readonly sanitizer: DomSanitizer) {
    this.iconRegistry.addSvgIcon('drag-icon', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/drag-icon.svg'));
    this.iconRegistry.addSvgIcon('currency-icon', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/currency-icon.svg'));
    this.iconRegistry.addSvgIcon('delete-icon', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/delete-icon.svg'));
    this.iconRegistry.addSvgIcon('lock-icon_inactive', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/lock-icon_inactive.svg'));
  }

}
