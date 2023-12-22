import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {HomeRoutingModule} from './home.routing.module';
import {HomePageComponent} from './home-page.component';
import {BurgerIngredientsComponent} from './burger-ingredients/burger-ingredients.component';
import {TabsComponent} from './burger-ingredients/tabs/tabs.component';
import {IngredientGroupComponent} from './burger-ingredients/ingredient-group/ingredient-group.component';
import {IngredientComponent} from './burger-ingredients/ingredient/ingredient.component';
import {BurgerConstructorComponent} from './burger-constructor/burger-constructor.component';
import {BurgerComponent} from './burger-constructor/burger/burger.component';
import {MiddleIngredientComponent} from './burger-constructor/middle-ingredient/middle-ingredient.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    HomePageComponent,
    BurgerIngredientsComponent,
    TabsComponent,
    IngredientGroupComponent,
    IngredientComponent,
    BurgerConstructorComponent,
    BurgerComponent,
    MiddleIngredientComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgOptimizedImage,
    MatIconModule,
    SharedModule,
  ]
})
export class HomeModule {
}
