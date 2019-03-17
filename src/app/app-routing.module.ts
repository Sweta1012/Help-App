import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NeedHelpComponent } from './getHelp/need-help/need-help.component';
import { BeHelpComponent } from './getHelp/be-help/be-help.component';
import { HomeComponent } from './getHelp/home/home.component';
import { LoginComponent } from './getHelp/login/login.component';
import { RegisterComponent } from './getHelp/register/register.component';
import { ProductDetailComponent } from './getHelp/be-help/product-detail/product-detail.component';

import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'needhelp', component: NeedHelpComponent, canActivate: [AuthGuard]},
  {path: 'behelp', component: BeHelpComponent, canActivate: [AuthGuard]},
  {path: 'behelp/:pCode', component: ProductDetailComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
