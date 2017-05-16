"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var KeyUpComponent_v1 = (function () {
    function KeyUpComponent_v1() {
        this.values = '';
    }
    KeyUpComponent_v1.prototype.onKey = function (event) {
        this.values += event.target.value + ' | ';
    };
    KeyUpComponent_v1.prototype.onClickMe = function () {
        this.values = '';
    };
    return KeyUpComponent_v1;
}()); // ajout chaque lettre au moment de la frappe */
KeyUpComponent_v1 = __decorate([
    core_1.Component({
        selector: 'keyupV1',
        templateUrl: './keyUp1/keyUpv1.html',
        styleUrls: ['./keyUp1/keyUpv1.css']
    })
], KeyUpComponent_v1);
exports.KeyUpComponent_v1 = KeyUpComponent_v1;
///////////////////////////////////////////////////////////////////////
var LoopbackComponent = (function () {
    function LoopbackComponent() {
    }
    return LoopbackComponent;
}()); /// le <p> correspond a la valeur de l'input
LoopbackComponent = __decorate([
    core_1.Component({
        selector: 'loop-back',
        templateUrl: './loopBack/loop-back.html',
        styleUrls: ['./loopBack/loop-back.css']
    })
], LoopbackComponent);
exports.LoopbackComponent = LoopbackComponent;
//////////////////////////////////////////////////////// ajout d'une variable de référence
var KeyUpComponent_v2 = (function () {
    function KeyUpComponent_v2() {
        this.values = '';
    }
    KeyUpComponent_v2.prototype.onKey = function (value) {
        this.values += value + ' | ';
    };
    KeyUpComponent_v2.prototype.onClickMe = function () {
        this.values = '';
    };
    return KeyUpComponent_v2;
}());
KeyUpComponent_v2 = __decorate([
    core_1.Component({
        selector: 'key-upv2',
        templateUrl: './keyUp2/keyUpv2.html',
        styleUrls: ['./keyUp2/keyUpv2.css']
    })
], KeyUpComponent_v2);
exports.KeyUpComponent_v2 = KeyUpComponent_v2;
/////////////////////////////////////////////////// key Event filtering with key.enter
var KeyUpComponent_v3 = (function () {
    function KeyUpComponent_v3() {
        this.value = '';
    }
    KeyUpComponent_v3.prototype.onEnter = function (value) { this.value = value; };
    return KeyUpComponent_v3;
}());
KeyUpComponent_v3 = __decorate([
    core_1.Component({
        selector: 'key-upv3',
        templateUrl: './keyUp3/keyUpv3.html',
        styleUrls: ['./keyUp3/keyUpv3.css']
    })
], KeyUpComponent_v3);
exports.KeyUpComponent_v3 = KeyUpComponent_v3;
////////////////////////////////////// keyUp v4 ajout du
var KeyUpComponent_v4 = (function () {
    function KeyUpComponent_v4() {
        this.value = '';
    }
    KeyUpComponent_v4.prototype.update = function (value) { this.value = value; };
    return KeyUpComponent_v4;
}());
KeyUpComponent_v4 = __decorate([
    core_1.Component({
        selector: 'key-upv4',
        templateUrl: './keyUp4/keyUpv4.html',
    })
], KeyUpComponent_v4);
exports.KeyUpComponent_v4 = KeyUpComponent_v4;
//# sourceMappingURL=keyup.component.js.map