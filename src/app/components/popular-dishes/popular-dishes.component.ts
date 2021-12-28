import { PlatService } from './../../services/plat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-dishes',
  templateUrl: './popular-dishes.component.html',
  styleUrls: ['./popular-dishes.component.css']
})
export class PopularDishesComponent implements OnInit {

  plats: any;
  popularDishesBanner= {title:'Delicious  Foods', subTitle: 'Popular Dishes'}
  constructor(private platService:PlatService) { }

  ngOnInit() {
    this.platService.sendRequestToGetAllPlats().subscribe(
      (data)=> {
        this.plats = data;
      }
    )
  }

}
