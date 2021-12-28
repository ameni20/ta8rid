import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chefs-list',
  templateUrl: './chefs-list.component.html',
  styleUrls: ['./chefs-list.component.css']
})
export class ChefsListComponent implements OnInit {

  chefs: any;
  constructor() { }

  ngOnInit() {
    this.chefs = [
      { id: 1, name: 'Ali', speciality: 'Cuisine FR' },
      { id: 2, name: 'Salah', speciality: 'Cuisine Tun' },
      { id: 3, name: 'Med', speciality: 'Cuisine Lb' },
      { id: 4, name: 'Hsan', speciality: 'Cuisine Cn' },
      { id: 5, name: 'Akram', speciality: 'Cuisine It' }
    ]
  }
}
