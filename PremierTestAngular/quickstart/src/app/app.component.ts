import { Component } from '@angular/core';
import {hero} from './Component/componentHero/hero';


@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
})
export class AppComponent  {
  title = 'Tour of Heroes';
  heroes = [
    new hero(1, 'Windstorm'),
    new hero(13, 'Bombasto'),
    new hero(15, 'Magneta'),
    new hero(20, 'Tornado')
    ];
  myHero = this.heroes[3];
 }
