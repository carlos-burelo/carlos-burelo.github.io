import { Component, OnInit } from '@angular/core';
import { DataService } from "@services/data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  res:any;
  service:any;
  constructor(public dataSvc: DataService) { }

  ngOnInit(): void {
    this.get();
  }
  get(){
    this.dataSvc.getData()
      .subscribe((res: { data: any; services: any; }) => {
        this.res = res?.data
        this.service = res?.services
      }
    );
  }
  
}
