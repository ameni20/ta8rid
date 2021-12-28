import { UserService } from './../../services/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  user:any={};
  errorMsg:string;
  constructor(
    private formBuilder:FormBuilder,
    private userService:UserService,
    private router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email:[''],
      pwd:['']
    })
  }

  login(){
    console.log('User object', this.user);
    this.userService.sendRequestToLogin(this.user).subscribe(
      (data)=> {
        console.log('Response after login', data);
        if (data.message  != '2') {
          // display msgError
          this.errorMsg = "Please check your email/pwd";
        } else {
          localStorage.setItem('connectedUser', JSON.stringify(data.user));
          if (data.user.role =="user") {
            this.router.navigate(['']);
          } else {
            this.router.navigate(['admin']);
          }
        }
      }
    )
  }
}
