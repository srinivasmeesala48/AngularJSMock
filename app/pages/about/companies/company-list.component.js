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
var CompanyListComponent = (function () {
    function CompanyListComponent(router, jsonService) {
        this.router = router;
        this.jsonService = jsonService;
        this.jsonData = [];
        this.companyList = [];
    }
    ;
    CompanyListComponent.prototype.onRowClick = function () {
        this.router.navigateByUrl('/companyDetails');
    };
    CompanyListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jsonService.getJsonData().subscribe(function (resJsonData) {
            _this.jsonData = Array.of(resJsonData);
            _this.setTableData(_this.jsonData);
        });
    };
    CompanyListComponent.prototype.setTableData = function (jsonData) {
        for (var _i = 0, jsonData_1 = jsonData; _i < jsonData_1.length; _i++) {
            var data = jsonData_1[_i];
            for (var _a = 0, _b = data.rows; _a < _b.length; _a++) {
                var finalData = _b[_a];
                if (finalData.category == "Companies")
                    this.companyList.push({
                        title: finalData.title,
                        image: finalData.imageHref,
                        url: finalData.url,
                        description: finalData.description
                    });
            }
        }
    };
    CompanyListComponent = __decorate([
        core_1.Component({
            selector: 'company-list',
            templateUrl: 'app/pages/about/companies/company-list.html',
            styleUrls: ['app/pages/about/about.css'],
            providers: [json_service_1.JsonService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, (typeof (_a = typeof json_service_1.JsonService !== 'undefined' && json_service_1.JsonService) === 'function' && _a) || Object])
    ], CompanyListComponent);
    return CompanyListComponent;
    var _a;
}());
exports.CompanyListComponent = CompanyListComponent;
//# sourceMappingURL=company-list.component.js.map