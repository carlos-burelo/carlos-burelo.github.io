import { Component, OnInit } from '@angular/core';
import { DataService } from "@services/data.service";
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  res:any
  constructor(public dataSvc: DataService) { }

  ngOnInit(): void {
    this.get();
  }
  get(){
    this.dataSvc.getData()
      .subscribe((res: { data: any; services: any; }) => {
        this.res = res?.data
      }
    );
  }

}
