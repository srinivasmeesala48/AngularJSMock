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
var json_service_1 = require('app/pages/about/json.service');
var HomeComponent = (function () {
    function HomeComponent(jsonService) {
        this.jsonService = jsonService;
    }
    ;
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jsonService.getJsonData().subscribe(function (resJsonData) {
            _this.jsonData = Array.of(resJsonData);
            _this.setHomeData(_this.jsonData);
        });
    };
    HomeComponent.prototype.setHomeData = function (jsonData) {
        for (var _i = 0, jsonData_1 = jsonData; _i < jsonData_1.length; _i++) {
            var data = jsonData_1[_i];
            this.homeDescription = data.description;
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: 'app/pages/home/home.html',
            styleUrls: ['app/pages/home/home.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [json_service_1.JsonService]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof json_service_1.JsonService !== 'undefined' && json_service_1.JsonService) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map