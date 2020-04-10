import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { AuthService } from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  constructor(
    private authService: AuthService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  loginUser(username, password){
    this.authService.login(username, password);
  }

}
