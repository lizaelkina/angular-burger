import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map, Observable} from 'rxjs';

export interface Ingredient {
  _id: string;
  name: string;
  type: 'bun' | 'sauce' | 'main';
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  uuid?: string;
}

@Injectable({
  providedIn: 'root'
})
export class BurgerIngredientsService {

  constructor(private http: HttpClient) {
  }

  getIngredients(): Observable<Ingredient[]> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    })
    return this.http.get<Ingredient[]>('https://norma.nomoreparties.space/api/ingredients', {
      headers: headers,
      observe: 'response',
    })
      .pipe(
        map(response => {
          return response.body ?? []
        })
      )
  }
}
