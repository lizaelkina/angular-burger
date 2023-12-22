import { Injectable } from '@angular/core';
import {Ingredient} from '../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class BurgerConstructorService {

  bun?: Ingredient
  middle: Ingredient[] = [];
  totalPrice: number = 0;

  constructor() { }

  addIngredient(ingredient: Ingredient) {
    if (ingredient.type === 'bun') {
      this.bun = ingredient;
    } else {
      this.middle = [...this.middle, ingredient];
    }

    this.totalPrice = (this.bun?.price ?? 0) * 2 + this.middle.reduce((sum, ingredient) => sum + ingredient.price, 0);
  }
}
