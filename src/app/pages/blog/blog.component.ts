import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { PostInterface } from "../../models/post";
import { BlogRespInterface } from "../../models/blog";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private httpClient: HttpClient){}
  res:BlogRespInterface;
  mainPost:PostInterface;
  posts:any;

  ngOnInit(): void {
    this.getData()
  }
  getData(){
    this.httpClient.get("http://carlos-burelo.github.io/assets/api/blog.json").subscribe(resp =>{
      this.res = resp;
      this.mainPost = this.res.mainPost;
      this.posts = this.res.posts;
    })
  }
}
