import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {HomeRoutingModule} from './home.routing.module';
import {HomePageComponent} from './home-page.component';
import {BurgerIngredientsComponent} from './burger-ingredients/burger-ingredients.component';
import {TabComponent} from './burger-ingredients/tab/tab.component';
import {IngredientGroupComponent} from './burger-ingredients/ingredient-group/ingredient-group.component';
import {IngredientComponent} from './burger-ingredients/ingredient/ingredient.component';
import {BurgerConstructorComponent} from './burger-constructor/burger-constructor.component';
import {BurgerPriceComponent} from './burger-constructor/burger-price/burger-price.component';
import {BurgerComponent} from './burger-constructor/burger/burger.component';
import {DraggableIngredientComponent} from './burger-constructor/draggable-ingredient/draggable-ingredient.component';


@NgModule({
  declarations: [
    HomePageComponent,
    BurgerIngredientsComponent,
    TabComponent,
    IngredientGroupComponent,
    IngredientComponent,
    BurgerConstructorComponent,
    BurgerPriceComponent,
    BurgerComponent,
    DraggableIngredientComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgOptimizedImage,
    MatIconModule
  ]
})
export class HomeModule {
}
