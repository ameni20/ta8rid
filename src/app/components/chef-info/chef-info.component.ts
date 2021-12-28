import { ChefService } from './../../services/chef.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chef-info',
  templateUrl: './chef-info.component.html',
  styleUrls: ['./chef-info.component.css']
})
export class ChefInfoComponent implements OnInit {

  id:any;
  chef:any;
  constructor(
    private activatedRoute:ActivatedRoute,
    private chefService:ChefService
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.chefService.sendRequestToGetChefById(this.id).subscribe(
      (data)=> {
        this.chef = data;
      }
    )
  }

}
