import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import { IngredientDetailsComponent } from './components/ingredient-details/ingredient-details.component';

@NgModule({
  declarations: [
    HeaderComponent,
    IngredientDetailsComponent
  ],
  exports: [
    HeaderComponent,
    IngredientDetailsComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    HttpClientModule
  ]
})
export class SharedModule {
}
