import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import { JsonService } from 'app/pages/about/json.service';

@Component({
  templateUrl: 'app/pages/about/technologies/technologydetails/technology-details.html',
  styleUrls: ['app/pages/about/about.css'],
  providers:[JsonService]
})
export class TechnologyDetailsComponent implements OnInit{
    constructor( private jsonService: JsonService) { };
    ngOnInit() {
        this.technologyData = this.jsonService.getData('jsonData');
  }
}