import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'about',
  templateUrl: 'app/pages/about/about.html',
  styleUrls: ['app/pages/about/about.css'],
})
export class AboutComponent {
    private isCompanyListVisible =true;
    private isTechnologyListVisible = false;
    constructor(private router : Router){}
    onSelectCompany(){
        this.isCompanyListVisible = true;
        this.isTechnologyListVisible = false;
    }
    onSelectTechnology(){
        this.isTechnologyListVisible = true;
        this.isCompanyListVisible = false;
    }
}