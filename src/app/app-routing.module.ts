import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'feed', loadChildren: () => import('./feed/feed.module').then(m => m.FeedModule)},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
