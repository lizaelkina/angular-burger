import {Component, Input} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {Ingredient} from '../../../shared/models';

@Component({
  selector: 'app-middle-ingredient',
  templateUrl: './middle-ingredient.component.html',
  styleUrls: ['./middle-ingredient.component.scss']
})
export class MiddleIngredientComponent {

  @Input() ingredient?: Ingredient;

  constructor(private readonly iconRegistry: MatIconRegistry,
              private readonly sanitizer: DomSanitizer) {
    this.iconRegistry.addSvgIcon('drag-icon', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/drag-icon.svg'));
    this.iconRegistry.addSvgIcon('currency-icon', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/currency-icon.svg'));
    this.iconRegistry.addSvgIcon('delete-icon', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/delete-icon.svg'));
  }

}
