import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { JsonService } from 'app/pages/about/json.service';

@Component({
    selector: 'home',
    templateUrl: 'app/pages/home/home.html',
    styleUrls: ['app/pages/home/home.css'],
    directives: [ROUTER_DIRECTIVES],
    providers:[JsonService]
})
export class HomeComponent implements OnInit{ 
    public homeDescription;
    constructor(private jsonService: JsonService){};
    ngOnInit(){
        this.jsonService.getJsonData().subscribe(resJsonData=>{this.jsonData=Array.of(resJsonData);
            this.setHomeData(this.jsonData)});
    }
    setHomeData(jsonData){
        for(let data of jsonData) {
            this.homeDescription = data.description;
        }
    }
}