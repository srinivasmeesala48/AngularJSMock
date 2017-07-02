import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StorageService{
    public appData;
    constructor( ){}   
    setData(key, data){
        appData[ key ] = data;
    }
    getdata(key){
        return appData[key];
    }
}