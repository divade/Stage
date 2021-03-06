import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService} from './hero.service';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
  <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
  <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
</nav>
<router-outlet></router-outlet>


      <h2>My Heroes</h2>
        <ul class="heroes">
          <li *ngFor="let hero of heroes"
          [class.selected]="hero === selectedHero"
          (click)="onSelect(hero)">
          <span class="badge">{{hero.id}}</span> {{hero.name}}
          </li>
        </ul>
      <hero-detail [hero]="selectedHero"></hero-detail>
      `,
      providers:[HeroService],
      styleUrls:['./aap.style.css'],
    })


export class AppComponent implements OnInit {
  title='Tour of Heroes';
heroes : Hero[];
selectedHero: Hero;

constructor(private heroService: HeroService){}

onSelect(hero: Hero):void{
  this.selectedHero = hero;
}
getHeroes():void{
this.heroService.getHeroes().then(heroes => this.heroes = heroes);
}
ngOnInit():void {
  this.getHeroes();
}
}
