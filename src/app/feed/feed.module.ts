import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedRoutingModule} from './feed.routing.module';
import {FeedPageComponent} from './feed-page.component';
import {OrderFeedComponent} from './order-feed/order-feed.component';
import {OrderSumComponent} from './order-sum/order-sum.component';


@NgModule({
  declarations: [
    FeedPageComponent,
    OrderFeedComponent,
    OrderSumComponent
  ],
  imports: [
    CommonModule,
    FeedRoutingModule
  ]
})
export class FeedModule {
}
