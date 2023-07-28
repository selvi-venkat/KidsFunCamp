import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './Component/about/about.component';
import { ReviewsComponent } from './Component/reviews/reviews.component';
import { CampsComponent } from './Component/camps/camps.component';
import { LoginFormComponent } from './Component/login-form/login-form.component';
import { WishlistComponent } from './Component/wishlist/wishlist.component';
import { CartComponent } from './Component/cart/cart.component';
import { SignupFormComponent } from './Component/signup-form/signup-form.component';
import { MainBannerComponent } from './Component/main-banner/main-banner.component';
import { PageNotFoundComponentComponent } from './common/page-not-found-component/page-not-found-component.component';

const routes: Routes= [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home',component: MainBannerComponent},
  {path: 'about', component: AboutComponent},
  {path: 'reviews', component: ReviewsComponent},
  {path: 'camps', component: CampsComponent},
  {path: 'account', component: LoginFormComponent},
  {path: 'account', children:[{
    path: 'signIn', component: SignupFormComponent
  }]},
  {path: 'wishlist', component: WishlistComponent},
  {path: 'cart', component: CartComponent},
  {path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
