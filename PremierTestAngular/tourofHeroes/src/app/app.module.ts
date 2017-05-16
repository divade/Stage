import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'; //   <----- NgMOdel lives here
import{HeroDetailComponent} from './hero-details.component';
import {RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
const appRoutes: Routes= []












@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule //    <----- import the FormsModule before binding with [(ngModel)]

   ],
  declarations: [
    AppComponent,
    HeroDetailComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
