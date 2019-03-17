import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { EqualValidator} from './shared/equal-validator.directive';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './shared/auth.service';
// import { ProductServiceService } from './shared/product-service.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuard } from './shared/auth.guard';

import { AppComponent } from './app.component';
import { NeedHelpComponent } from './getHelp/need-help/need-help.component';
import { BeHelpComponent } from './getHelp/be-help/be-help.component';
import { HomeComponent } from './getHelp/home/home.component';
import { LoginComponent } from './getHelp/login/login.component';
import { RegisterComponent } from './getHelp/register/register.component';
import { ProductFilterPipe } from './shared/product-filter.pipe';
import { RatingsComponent } from './getHelp/be-help/ratings/ratings.component';
import { ProductDetailComponent } from './getHelp/be-help/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NeedHelpComponent,
    BeHelpComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    EqualValidator,
    ProductFilterPipe,
    RatingsComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ AuthService, CookieService, AuthGuard ],
  bootstrap: [AppComponent]
})

export class AppModule { }
