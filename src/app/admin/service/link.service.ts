import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor(private http: HttpClient) { }

  getAll() :Observable<any>{
    return this.http.get(environment.api_url + '');
  }

  addLink(data:any) : Observable<any>{
    return this.http.post(environment.api_url,data);
  }

  delete(id:number):Observable<any> {
   return this.http.delete(environment.api_url + '/' +id);
  }
  edit(id:number,data :any) :Observable<any> {
    return this.http.put(
      environment.api_url + '/' +id, data
    );
  }
  findById(id:number):Observable<any> {
    return this.http.get(environment.api_url + '/' +id);
  }
}
