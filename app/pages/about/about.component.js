"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var AboutComponent = (function () {
    function AboutComponent(router) {
        this.router = router;
        this.isCompanyListVisible = true;
        this.isTechnologyListVisible = false;
    }
    AboutComponent.prototype.onSelectCompany = function () {
        this.isCompanyListVisible = true;
        this.isTechnologyListVisible = false;
    };
    AboutComponent.prototype.onSelectTechnology = function () {
        this.isTechnologyListVisible = true;
        this.isCompanyListVisible = false;
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'about',
            templateUrl: 'app/pages/about/about.html',
            styleUrls: ['app/pages/about/about.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map