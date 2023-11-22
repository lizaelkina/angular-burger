import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
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
