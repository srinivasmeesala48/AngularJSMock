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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var JsonService = (function () {
    function JsonService(_http) {
        this._http = _http;
        this.appData = [];
    }
    JsonService.prototype.getJsonData = function () {
        return this._http.get('app/pages/json/mockdata.json').
            map(function (response) { return response.json(); });
    };
    JsonService.prototype.setData = function (key, data) {
        this.appData[key] = data;
    };
    JsonService.prototype.getData = function (key) {
        return this.appData[key];
    };
    JsonService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], JsonService);
    return JsonService;
}());
exports.JsonService = JsonService;
//# sourceMappingURL=json.service.js.map