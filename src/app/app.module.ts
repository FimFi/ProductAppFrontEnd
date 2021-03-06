import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductUpdateComponent } from "./products/product-update/product-update.component";
import {HttpClientModule} from '@angular/common/http';
import {AuthenticationService} from './shared/services/authentication.service';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {NavbarComponent} from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NavbarComponent,
    WelcomeComponent,
    ProductDetailsComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthenticationService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
