import {Component, Input} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

import {Ingredient} from '../../../shared/models';
import {BurgerConstructorService} from '../../burger-constructor/burger-constructor.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent {

  @Input() ingredient?: Ingredient;

  constructor(public readonly burgerConstructorService: BurgerConstructorService,
              private readonly iconRegistry: MatIconRegistry,
              private readonly sanitizer: DomSanitizer) {
    this.iconRegistry.addSvgIcon('currency-icon', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/currency-icon.svg'));
  }
}
