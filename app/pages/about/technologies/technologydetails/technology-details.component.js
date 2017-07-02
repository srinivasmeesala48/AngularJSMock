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
var json_service_1 = require('app/pages/about/json.service');
var TechnologyDetailsComponent = (function () {
    function TechnologyDetailsComponent(jsonService) {
        this.jsonService = jsonService;
    }
    ;
    TechnologyDetailsComponent.prototype.ngOnInit = function () {
        this.technologyData = this.jsonService.getData('jsonData');
    };
    TechnologyDetailsComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/pages/about/technologies/technologydetails/technology-details.html',
            styleUrls: ['app/pages/about/about.css'],
            providers: [json_service_1.JsonService]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof json_service_1.JsonService !== 'undefined' && json_service_1.JsonService) === 'function' && _a) || Object])
    ], TechnologyDetailsComponent);
    return TechnologyDetailsComponent;
    var _a;
}());
exports.TechnologyDetailsComponent = TechnologyDetailsComponent;
//# sourceMappingURL=technology-details.component.js.map