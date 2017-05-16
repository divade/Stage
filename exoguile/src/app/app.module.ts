import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {showUser} from './User/showUser/showUser';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule,
  FormsModule ],
  declarations: [ AppComponent,
    showUser
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
