"use strict";
var router_1 = require('@angular/router');
var about_component_1 = require('./pages/about/about.component');
var home_component_1 = require('./pages/home/home.component');
var company_list_component_1 = require('./pages/about/companies/company-list.component');
var technology_list_component_1 = require('./pages/about/technologies/technology-list.component');
var technology_details_component_1 = require('./pages/about/technologies/technologydetails/technology-details.component');
var company_details_component_1 = require('./pages/about/companies/companydetails/company-details.component');
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'categories', component: about_component_1.AboutComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'companies', component: company_list_component_1.CompanyListComponent },
    { path: 'technologies', component: technology_list_component_1.TechnologyListComponent },
    { path: 'companyDetails', component: company_details_component_1.CompanyDetailsComponent },
    { path: 'technologyDetails', component: technology_details_component_1.TechnologyDetailsComponent }
];
exports.myRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map