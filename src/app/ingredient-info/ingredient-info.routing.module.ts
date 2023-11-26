import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IngredientInfoPageComponent} from './ingredient-info-page.component';

const routes: Routes = [
  {path: '', component: IngredientInfoPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngredientInfoRoutingModule {
}
