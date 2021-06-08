import { NgModule, ViewChild } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyPolicyComponent } from './components/buy-policy/buy-policy.component';

import { CustomerLoginComponent } from './components/customer-login/customer-login.component';
import { CustomerRegisterComponent } from './components/customer-register/customer-register.component';
import { CustomerviewComponent } from './components/customerview/customerview.component';

import { HomePageComponent } from './components/home-page/home-page.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PolicyListComponent } from './components/policy-list/policy-list.component';
import { PolicyComponent } from './components/policy/policy.component';
import { PurchasePolicyComponent } from './components/purchase-policy/purchase-policy.component';

import { RegisterComponent } from './components/register/register.component';
import { TrashedPolicyComponent } from './components/trashed-policy/trashed-policy.component';
import { UpdatePolicyComponent } from './components/update-policy/update-policy.component';

import { ViewPolicyComponent } from './components/view-policy/view-policy.component';

import { WelcomeComponent } from './components/welcome/welcome.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'welcome', component: WelcomeComponent},
 {path: 'homePage', component:HomePageComponent}, 
 {path: 'purchase/:id', component: PurchasePolicyComponent},
  { path: 'registration', component: RegisterComponent },
{path:'buy', component:BuyPolicyComponent},
 {path: 'update/:id', component: UpdatePolicyComponent},
{path: 'viewpolicy', component: ViewPolicyComponent},
{path: 'policyDetails/:id', component: PolicyListComponent},
  {path: 'home', component: HomeComponent,
children: [ 
{ path: '', redirectTo: 'addpolicy' , pathMatch: 'full'},
{path:'addpolicy', component: PolicyComponent}
]},
  {path: 'trash', component: TrashedPolicyComponent},
  
  {path:'customer', component: CustomerRegisterComponent},
  {path: 'custlogin', component: CustomerLoginComponent},
// {path: 'view' , component: CustomerviewComponent},
  { path: '**', redirectTo: 'welcome' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
