import { PlatService } from './../../services/plat.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-plat',
  templateUrl: './search-plat.component.html',
  styleUrls: ['./search-plat.component.css']
})
export class SearchPlatComponent implements OnInit {

  searchForm:FormGroup;
  findedPlats:any;
  constructor(
    private fb:FormBuilder,
    private platService:PlatService) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      name:[''],
      price:['']
    })
  }

  searchPlat(){
    console.log('Here plat name', this.searchForm.value.name);
    this.platService.sendRequestToGetAllPlatsByNameAndPrice(this.searchForm.value).subscribe(
      (data)=> {
        console.log('Here finded plats by name', data);
        this.findedPlats = data.allPlats;
      }
    )
  }

}
