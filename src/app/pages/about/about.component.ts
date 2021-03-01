import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ProfileInterface } from '../../models/profile';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private httpClient: HttpClient){}
  res:ProfileInterface

  ngOnInit(): void {
    this.getData()
  }
  getData(){
    this.httpClient.get("./assets/main.json").subscribe(resp =>{
      this.res = resp;
      this.res = this.res?.data
      console.log(this.res)
    })
  }
}
