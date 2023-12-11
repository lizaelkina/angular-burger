import {Ingredient, IngredientType} from '../../shared/models';

export interface IngredientGroup {
  name: string;
  ingredientType: IngredientType;
  ingredients: Ingredient[];
}
