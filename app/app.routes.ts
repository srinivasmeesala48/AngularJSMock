import { provideRouter, RouterConfig }  from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { CompanyListComponent } from './pages/about/companies/company-list.component';
import { TechnologyListComponent } from './pages/about/technologies/technology-list.component';
import { TechnologyDetailsComponent } from './pages/about/technologies/technologydetails/technology-details.component';
import { CompanyDetailsComponent } from './pages/about/companies/companydetails/company-details.component';

const routes: RouterConfig = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'categories', component: AboutComponent },
    { path: 'home', component: HomeComponent },
    { path: 'companies', component: CompanyListComponent },
    { path: 'technologies', component: TechnologyListComponent },
    { path: 'companyDetails', component: CompanyDetailsComponent },
    { path: 'technologyDetails', component: TechnologyDetailsComponent }
];

export const myRouterProviders = [
    provideRouter(routes)
];

