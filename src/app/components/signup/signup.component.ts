import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/validators/mustMatch';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  name:string;
  href:string;
  errMsg:string;
  constructor(
    private fb: FormBuilder, 
    private userService:UserService,
    private router:Router) { }

  ngOnInit() {
    this.href = this.router.url;
    console.log("Here href", this.href);
    this.name = "ABderrahmen";
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
      tel: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(13)]],
    },
    {
      validator: MustMatch('password', 'confirmPassword')
    })
  }
  signup() {
    let roleAttribute;
    if (this.href == "/signup") {
      roleAttribute = "user";
    } else {
      roleAttribute = "admin";
    }
    this.signupForm.value.role = roleAttribute;
    console.log('Here user values', this.signupForm.value);
    this.userService.sendRequestToSignup(this.signupForm.value).subscribe(
      (data) => {
        console.log('Signup response from BE', data.code);
        if (data.code == "0") {
          this.errMsg = "Email exists";
        } else {
          this.router.navigate(['login']);
        }
      }
    );
  }

}
