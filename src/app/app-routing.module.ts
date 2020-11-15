import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {ProductListComponent} from './products/product-list/product-list.component';
import {ProductDetailsComponent} from './products/product-details/product-details.component';
import {ProductAddComponent} from './products/product-add/product-add.component';
import {ProductUpdateComponent} from './products/product-update/product-update.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  { path: 'products', component: ProductListComponent},
  { path: '', component: WelcomeComponent, canActivate: [AuthGuard]},
  { path: 'products/:id', component: ProductDetailsComponent},
  { path: 'product-add', component: ProductAddComponent},
  { path: 'product-update/:id', component: ProductUpdateComponent},
  { path: 'login', component: LoginComponent},

  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
