import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'feed', loadChildren: () => import('./feed/feed.module').then(m => m.FeedModule)},
  {path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)},
  {path: 'ingredients/id', loadChildren: () => import('./ingredient-info/ingredient-info.module').then(m => m.IngredientInfoModule)},
  {path: 'error', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule)},
  {path: '**', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule)},
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
