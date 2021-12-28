import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users:any;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  deleteUser(id){
    this.userService.sendRequestToDeleteUser(id).subscribe(
      ()=> {
        console.log('user is deleted with success');
        this.getAllUsers();
      }
    )
  }

  getAllUsers(){
    this.userService.sendRequestToGetAllUsers().subscribe(
      (data)=> {
        this.users = data;
      }
    )
  }

}
