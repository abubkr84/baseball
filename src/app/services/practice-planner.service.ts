import { Injectable } from '@angular/core';
import { Headers, Http} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpModule } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class PracticePlannerService {

  constructor(private http: Http) { }

  createPlan() {
   const url = '/api/practicePlans/';
   const headers = new Headers();
   headers.append('Content-Type', 'application/json');
   return this.http.get(url, { headers: headers }).map(res => res.json());
 }
  savePlanInfo(planData) {
   const body = JSON.stringify(planData);
   const url = '/api/practicePlans/';
   const headers = new Headers({ 'Content-Type': 'application/json' });
   console.log('data sent to post request', body);
   return this.http.post(url, body, {headers: headers});
 }
}
