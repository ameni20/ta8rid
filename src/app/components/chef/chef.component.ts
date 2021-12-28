import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {

  @Input() chefInput:any;
  constructor() { }

  ngOnInit() {
  }

}
