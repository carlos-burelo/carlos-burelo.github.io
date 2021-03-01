import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  res:any;
  constructor(private http:HttpClient) { }
  
  getData(){
    this.res = this.http.get<any[]>('./assets/main.json');
    return this.res
  }

}
