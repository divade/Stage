"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ClickMeComponent = (function () {
    function ClickMeComponent() {
        this.clickMessage = '';
    }
    ClickMeComponent.prototype.onClickMe = function () {
        this.clickMessage = 'You are my Hero!';
    };
    return ClickMeComponent;
}());
ClickMeComponent = __decorate([
    core_1.Component({
        selector: 'click-me',
        template: "\n  ------------------------\n  <p> Module click-me : au click apparition d'une phrase </p>\n    <button (click)=\"onClickMe()\">Click me!</button>\n    {{clickMessage}}\n    <br>\n------------------------\n    "
    })
], ClickMeComponent);
exports.ClickMeComponent = ClickMeComponent;
//# sourceMappingURL=click-me.component.js.map