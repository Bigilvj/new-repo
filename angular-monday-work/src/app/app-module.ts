import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HeaderComponent } from '../components/components/header-component/header-component';
import { NavComponent } from '../components/components/nav-component/nav-component';
import { CenterComponent } from '../components/components/center-component/center-component';
import { SecondHeader } from '../components/components/second-header/second-header';
import{UserAndDetails} from '../components/components/user-and-details/user-and-details'
import { HomeComponent } from '../components/components/home-component/home-component';
import { ContactUs } from '../components/components/contact-us/contact-us';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Highlight } from '../components/directives/highlight';
import { ApiComponent } from '../components/components/api-component/api-component';
import { LifeCycle } from '../components/components/life-cycle/life-cycle';
import { Pipes } from '../components/components/pipes/pipes';
@NgModule({
  declarations: [
    App,
    HeaderComponent,
    NavComponent,
    CenterComponent,
    SecondHeader,
    UserAndDetails,
    HomeComponent,
    ContactUs,
    Highlight,
    ApiComponent,
    LifeCycle,
    Pipes
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
       FormsModule,
       ReactiveFormsModule,
       HttpClientModule,
  
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
