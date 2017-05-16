export class Hero {
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ){ }
}

let myHero = new Hero(42, 'SkyDog',
'fetch any object at any distance',
'Leslie Rollover');
console.log('My hero is called ' +myHero.name);
