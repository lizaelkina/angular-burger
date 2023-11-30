import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Ingredient} from '../shared/models';

export interface GetIngredientsRes {
  success: boolean;
  data: Ingredient[];
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) {
  }

  getIngredients(): Observable<Ingredient[]> {
    return this.http.get<GetIngredientsRes>('https://norma.nomoreparties.space/api/ingredients').pipe(
      map(res => res.data)
    )
  }
}
