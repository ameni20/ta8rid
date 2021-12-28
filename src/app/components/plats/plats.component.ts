import { PlatService } from './../../services/plat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plats',
  templateUrl: './plats.component.html',
  styleUrls: ['./plats.component.css']
})
export class PlatsComponent implements OnInit {

  plats:any=[];
  constructor(private platService:PlatService) { }

  ngOnInit() {
    this.platService.sendRequestToGetAllPlats().subscribe(
      (data)=> {
        console.log('here data', data);
        
        this.plats = data.plats;
      }
    )
  }

}
