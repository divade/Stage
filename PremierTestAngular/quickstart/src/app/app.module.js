"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var click_me_component_1 = require("./Component/componentClick-me/click-me.component");
var keyup_component_1 = require("./Component/componentKeyUp/keyup.component");
var little_tour_component_1 = require("./Component/littleTour/little-tour.component");
var hero_form_component_1 = require("./ComponentForm/heroForm/hero-form.component");
var navbar_component_1 = require("./Component/Navbar/navbar.component");
var footer_1 = require("./Component/Footer/footer");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            click_me_component_1.ClickMeComponent,
            keyup_component_1.KeyUpComponent_v1,
            keyup_component_1.LoopbackComponent,
            keyup_component_1.KeyUpComponent_v2,
            keyup_component_1.KeyUpComponent_v3,
            keyup_component_1.KeyUpComponent_v4,
            little_tour_component_1.LittleTourComponent,
            hero_form_component_1.HeroFormComponent,
            navbar_component_1.navbarheader,
            footer_1.footer,
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map