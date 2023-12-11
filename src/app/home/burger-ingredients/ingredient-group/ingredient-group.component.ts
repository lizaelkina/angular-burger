import {Component, Input} from '@angular/core';
import {IngredientGroup} from '../burger-ingredients.models';

@Component({
  selector: 'app-ingredient-group',
  templateUrl: './ingredient-group.component.html',
  styleUrls: ['./ingredient-group.component.scss']
})
export class IngredientGroupComponent {

  @Input() group!: IngredientGroup

}
