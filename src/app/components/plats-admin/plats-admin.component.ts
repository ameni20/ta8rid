import { PlatService } from './../../services/plat.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plats-admin',
  templateUrl: './plats-admin.component.html',
  styleUrls: ['./plats-admin.component.css']
})
export class PlatsAdminComponent implements OnInit {

  plats: any;
  pageOfItems: Array<any>;
  constructor(
    private platService: PlatService,
    private router: Router) { }

  ngOnInit() {
    // send request to get all plats (call service function)
    this.getAllPlats();
  }

  deletePlat(id: any) {
    console.log('Here into component :id', id);
    // send request to delete plat by ID
    this.platService.sendRequestToDeletePlat(id).subscribe(
      (data) => {
        console.log('Message from BE', data.message);
        this.getAllPlats();
      }
    );
  }

  getAllPlats() {
    setTimeout((x)=> {
      console.log('x', x);
      this.platService.sendRequestToGetAllPlats().subscribe(
        (data) => {
          console.log('Here data from BE', data);
          this.plats = data.plats;
        }
      );
    }, 3000);
  }

  goToAdd() {
    this.router.navigate(['addPlat']);
  }

  goToPlatInfo(id) {
    // localStorage.setItem('platId', x);
    this.router.navigate([`platInformation/${id}`]);
  }

  goToPath(path) {
    this.router.navigate([path]);
  }

  goToEdit(id) {
    this.router.navigate([`edit-plat/${id}`]);
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items 
    this.pageOfItems = pageOfItems;
  }


}
