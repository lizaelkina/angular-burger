import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {RouterLink, RouterLinkActive} from '@angular/router';


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
    RouterLinkActive
  ]
})
export class SharedModule {
}
