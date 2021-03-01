import { Component, OnInit } from '@angular/core';
// import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    // public authSvc: AuthService
    ) { }

  ngOnInit(): void {
  }
  toggleMenu(){
    document.getElementById('overlay').classList.toggle('active');
  }

  // onLogOut():void{
  //   this.authSvc.logOut();
  // }

}
