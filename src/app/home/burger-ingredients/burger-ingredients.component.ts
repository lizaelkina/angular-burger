import {Component, OnInit} from '@angular/core';
import {BurgerIngredientsService, Ingredient} from './burger-ingredients.service';

@Component({
  selector: 'app-burger-ingredients',
  templateUrl: './burger-ingredients.component.html',
  styleUrls: ['./burger-ingredients.component.scss']
})
export class BurgerIngredientsComponent implements OnInit {

  ingredients: Ingredient[] = [];

  constructor(private ingredientsService: BurgerIngredientsService) {
  }

  ngOnInit() {
    this.getIngredients();
  }

  getIngredients() {
    this.ingredientsService.getIngredients()
      .subscribe({
        next: ingredients => {
          this.ingredients = ingredients
        }
      })
  }
}
