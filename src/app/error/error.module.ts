import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ErrorPageComponent} from './error-page.component';
import {ErrorRoutingModule} from './error.routing.module';

@NgModule({
  declarations: [
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    ErrorRoutingModule
  ]
})
export class ErrorModule {
}
