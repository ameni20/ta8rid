import { ChefService } from './../../services/chef.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chefs-admin',
  templateUrl: './chefs-admin.component.html',
  styleUrls: ['./chefs-admin.component.css']
})
export class ChefsAdminComponent implements OnInit {

  chefs: any;
  constructor(
    private chefService: ChefService,
    private router:Router
  ) { }

  ngOnInit() {
    this.getAllChefs();
  }

  deleteChef(id) {
    this.chefService.sendRequestToDeleteChef(id).subscribe(
      () => {
        console.log('Chef is deleted with success');
        this.getAllChefs();
      }
    )
  }

  getAllChefs() {
    this.chefService.sendRequestToGetAllChefs().subscribe(
      (data) => {
        this.chefs = data;
      }
    )
  }

  goToEditChef(id){
    this.router.navigate([`editChef/${id}`]);
  }

  goToDisplayChef(id){
    this.router.navigate([`displayChef/${id}`]);
  }

}
