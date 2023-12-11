import {Component, OnInit} from '@angular/core';
import {map, Observable} from 'rxjs';
import {HomeService} from '../home.service';
import {IngredientGroup} from './burger-ingredients.models';

@Component({
  selector: 'app-burger-ingredients',
  templateUrl: './burger-ingredients.component.html',
  styleUrls: ['./burger-ingredients.component.scss']
})
export class BurgerIngredientsComponent implements OnInit {

  ingredientGroups$!: Observable<IngredientGroup[]>

  constructor(private ingredientsService: HomeService) {
  }

  ngOnInit() {
    this.ingredientGroups$ = this.ingredientsService.getIngredients().pipe(
      map(ingredients => {
        const bunGroup: IngredientGroup = {
          name: 'Булки',
          ingredientType: 'bun',
          ingredients: ingredients.filter(i => i.type === 'bun')
        }
        const sauceGroup: IngredientGroup = {
          name: 'Соусы',
          ingredientType: 'sauce',
          ingredients: ingredients.filter(i => i.type === 'sauce')
        }
        const mainGroup: IngredientGroup = {
          name: 'Начинки',
          ingredientType: 'main',
          ingredients: ingredients.filter(i => i.type === 'main')
        }
        return [bunGroup, sauceGroup, mainGroup];
      })
    );
  }
}
