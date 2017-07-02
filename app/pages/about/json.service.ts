import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class JsonService{
    public appData =[];
    constructor( public _http : Http ){}   
    getJsonData(){
        return this._http.get('app/pages/json/mockdata.json').
            map((response:Response) =>response.json());
    }
    setData(key, data){
        this.appData[key] = data;
    }
    getData(key){
      return this.appData[key]
    }
}