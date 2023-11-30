import {Component, OnInit} from '@angular/core';
import {HomeService} from '../home.service';
import {Observable} from 'rxjs';
import {Ingredient} from '../../shared/models';

@Component({
  selector: 'app-burger-ingredients',
  templateUrl: './burger-ingredients.component.html',
  styleUrls: ['./burger-ingredients.component.scss']
})
export class BurgerIngredientsComponent implements OnInit {

  ingredients$!: Observable<Ingredient[]>;

  constructor(private ingredientsService: HomeService) {
  }

  ngOnInit() {
    this.ingredients$ = this.ingredientsService.getIngredients();
  }
}
