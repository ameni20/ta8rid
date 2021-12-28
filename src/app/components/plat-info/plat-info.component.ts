import { PlatService } from './../../services/plat.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plat-info',
  templateUrl: './plat-info.component.html',
  styleUrls: ['./plat-info.component.css']
})
export class PlatInfoComponent implements OnInit {

  id:any;
  plat:any;
  constructor(
    private activatedRoute:ActivatedRoute,
    private platService:PlatService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.platService.sendRequestToGetPlatById(this.id).subscribe(
      (data)=> {
        console.log('Data from BE ', data);
        this.plat = data.plat;
      }
    );
  }

}
