import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {HomeRoutingModule} from './home.routing.module';
import {HomePageComponent} from './home-page.component';
import { BurgerIngredientsComponent } from './burger-ingredients/burger-ingredients.component';
import { TabComponent } from './burger-ingredients/tab/tab.component';
import { IngredientGroupComponent } from './burger-ingredients/ingredient-group/ingredient-group.component';
import { IngredientComponent } from './burger-ingredients/ingredient/ingredient.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    HomePageComponent,
    BurgerIngredientsComponent,
    TabComponent,
    IngredientGroupComponent,
    IngredientComponent
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
