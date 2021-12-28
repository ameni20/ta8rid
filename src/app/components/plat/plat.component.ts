import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.css']
})
export class PlatComponent implements OnInit {

  @Input() platInput:any;
  constructor() { }

  ngOnInit() {
  }

}
