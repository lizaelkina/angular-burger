import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedRoutingModule} from './feed.routing.module';
import {FeedPageComponent} from './feed-page.component';
import {OrderFeedComponent} from './order-feed/order-feed.component';
import {OrderSumComponent} from './order-sum/order-sum.component';
import {OrderCardComponent} from './order-feed/order-card/order-card.component';
import {OrderPriceComponent} from './order-feed/order-price/order-price.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    FeedPageComponent,
    OrderFeedComponent,
    OrderSumComponent,
    OrderCardComponent,
    OrderPriceComponent,
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    MatIconModule
  ]
})
export class FeedModule {
}
