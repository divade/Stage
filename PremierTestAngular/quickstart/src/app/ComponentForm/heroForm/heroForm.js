"use strict";
var Hero = (function () {
    function Hero(id, name, power, alterEgo) {
        this.id = id;
        this.name = name;
        this.power = power;
        this.alterEgo = alterEgo;
    }
    return Hero;
}());
exports.Hero = Hero;
var myHero = new Hero(42, 'SkyDog', 'fetch any object at any distance', 'Leslie Rollover');
console.log('My hero is called ' + myHero.name);
//# sourceMappingURL=heroForm.js.map