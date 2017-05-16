import { NgModule }      from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ClickMeComponent} from './Component/componentClick-me/click-me.component';
import {KeyUpComponent_v1, LoopbackComponent, KeyUpComponent_v2, KeyUpComponent_v3, KeyUpComponent_v4} from './Component/componentKeyUp/keyup.component';
import {LittleTourComponent} from './Component/littleTour/little-tour.component';
import {HeroFormComponent} from './ComponentForm/heroForm/hero-form.component';
import {navbarheader} from './Component/Navbar/navbar.component';
import {footer} from './Component/Footer/footer';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
  ],

  declarations: [
        AppComponent,
        ClickMeComponent,
        KeyUpComponent_v1,
        LoopbackComponent,
        KeyUpComponent_v2,
        KeyUpComponent_v3,
        KeyUpComponent_v4,
        LittleTourComponent,
        HeroFormComponent,
        navbarheader,
        footer,
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
