import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { Material } from './material';
import { HomeComponent } from './components/home/home.component';
import { ViewPolicyComponent } from './components/view-policy/view-policy.component';
import { TrashedPolicyComponent } from './components/trashed-policy/trashed-policy.component';
import { PolicyComponent } from './components/policy/policy.component';
import { UpdatePolicyComponent } from './components/update-policy/update-policy.component';

import { WelcomeComponent } from './components/welcome/welcome.component';

import { CustomerLoginComponent } from './components/customer-login/customer-login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CustomerRegisterComponent } from './components/customer-register/customer-register.component';
import { BuyPolicyComponent } from './components/buy-policy/buy-policy.component';
import { CustomerviewComponent } from './components/customerview/customerview.component';
import { PolicyListComponent } from './components/policy-list/policy-list.component';
import { PurchasePolicyComponent } from './components/purchase-policy/purchase-policy.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ViewPolicyComponent,
    TrashedPolicyComponent,
    PolicyComponent,
    UpdatePolicyComponent,
    WelcomeComponent,
    CustomerLoginComponent,
    HomePageComponent,
    CustomerRegisterComponent,
    BuyPolicyComponent,
    CustomerviewComponent,
    PolicyListComponent,
    PurchasePolicyComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    Material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
