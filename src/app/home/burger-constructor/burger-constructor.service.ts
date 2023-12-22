import { Injectable } from '@angular/core';
import {Ingredient} from '../../shared/models';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BurgerConstructorService {

  private bun?: Ingredient
  private middle: Ingredient[] = [];
  private totalPrice: number = 0;

  private bunSubject = new Subject<Ingredient>()
  public bun$: Observable<Ingredient> = this.bunSubject.asObservable();
  private middleSubject = new Subject<Ingredient[]>()
  public middle$: Observable<Ingredient[]> = this.middleSubject.asObservable();
  private totalPriceSubject = new Subject<number>()
  public totalPrice$: Observable<number> = this.totalPriceSubject.asObservable();

  constructor() { }

  addIngredient(ingredient: Ingredient) {
    if (ingredient.type === 'bun') {
      this.bun = ingredient;
      this.bunSubject.next(this.bun);
    } else {
      this.middle = [...this.middle, ingredient];
      this.middleSubject.next(this.middle);
    }
    this.totalPrice = (this.bun?.price ?? 0) * 2 + this.middle.reduce((sum, ingredient) => sum + ingredient.price, 0);
    this.totalPriceSubject.next(this.totalPrice);
  }
}
