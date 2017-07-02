import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonService } from 'app/pages/about/json.service';

@Component({
  selector: 'company-list',
  templateUrl: 'app/pages/about/companies/company-list.html',
  styleUrls: ['app/pages/about/about.css'],
  providers:[JsonService]
})
export class CompanyListComponent implements OnInit{
    public jsonData=[];
    public companyList = [];
    constructor(private router: Router, private jsonService: JsonService){};
    onRowClick(){
        this.router.navigateByUrl('/companyDetails');
    } 
    ngOnInit(){
        this.jsonService.getJsonData().subscribe(resJsonData=>{this.jsonData=Array.of(resJsonData);
            this.setTableData(this.jsonData)});
    }
    
    setTableData(jsonData){
     for(let data of jsonData) {
          for(let finalData of data.rows){
           if( finalData.category == "Companies" )
                this.companyList.push({
                    title : finalData.title,
                    image : finalData.imageHref,
                    url: finalData.url,
                    description: finalData.description
                })
          }
        }
    }
}