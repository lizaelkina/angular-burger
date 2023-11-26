import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IngredientInfoPageComponent} from './ingredient-info-page.component';
import {IngredientInfoRoutingModule} from './ingredient-info.routing.module';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    IngredientInfoPageComponent
  ],
  imports: [
    CommonModule,
    IngredientInfoRoutingModule,
    SharedModule
  ]
})
export class IngredientInfoModule {
}
