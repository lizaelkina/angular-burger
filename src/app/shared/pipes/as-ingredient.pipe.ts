import { Pipe, PipeTransform } from '@angular/core';
import {Ingredient} from '../models';

@Pipe({
  name: 'asIngredient'
})
export class AsIngredientPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): Ingredient {
    return value as Ingredient;
  }

}
