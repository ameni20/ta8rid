import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  user:any={};
  addAdminForm:FormGroup;
  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.addAdminForm = this.fb.group({
      firstName : [''],
      lastName : [''],
      email : [''],
      password : [''],
      tel : ['']
    })
  }

  addAdmin(){
    console.log(this.user);
    
  }

}
