import {Component} from '@angular/core';

@Component({
  selector: 'little-tour',
  templateUrl:'./little-tour.html',
})
export class LittleTourComponent{
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  addHero (newHero:string){
    if(newHero){
      this.heroes.push(newHero);
    }
  }
}
