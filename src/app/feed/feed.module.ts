import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FeedRoutingModule} from './feed-routing.module';
import {FeedPageComponent} from './feed-page.component';


@NgModule({
  declarations: [
    FeedPageComponent
  ],
  imports: [
    CommonModule,
    FeedRoutingModule
  ]
})
export class FeedModule {
}
