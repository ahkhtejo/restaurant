//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class JesonConectionProvider {

  constructor(public http: Http) {
  //  console.log('Hello JesonConectionProvider Provider');
  }

  getProducts(){
    return this.http.get("/assets/data.json")
      .map(response => response.json());
  }


}
