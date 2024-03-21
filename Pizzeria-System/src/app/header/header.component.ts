import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private _login:LoginService,private router:Router){}
  log = false;
  logOut(){
    this._login.logout();
    this.log = false;
  }
  logIn(){
    this.router.navigate(['Login']);
  }
}
