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
        template: "\n  <p> Module keyupV1 : ajout de chaque lettre + la(es) pr\u00E9c\u00E9dentes aux moments de la frappe, le bouton efface toutes les lettres</p>\n  <input (keyup)=\"onKey($event)\">\n  <p>{{values}}</p>\n  <button (click)='onClickMe()'>Click me for Clear ! </button>\n  <br>\n  ------------------------\n  ",
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
        template: "\n    <br>\n    <p> Module loop-back : le paragraphe prend la valeur de l'input </p>\n    <input #box (keyup)=\"0\">\n    <p>{{box.value}}</p>\n    <br>\n    ------------------------\n  "
    })
], LoopbackComponent);
exports.LoopbackComponent = LoopbackComponent;
//# sourceMappingURL=keyup.component.js.map