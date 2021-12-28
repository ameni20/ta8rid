import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plat-child',
  templateUrl: './plat-child.component.html',
  styleUrls: ['./plat-child.component.css']
})
export class PlatChildComponent implements OnInit {

  @Input() platInput: any;
  constructor() { }

  ngOnInit() {
  }
  priceColor(x) {
    let color;
    if (x > 30) {
      color = 'red';
    } else if (x > 10) {
      color = 'orange';
    } else {
      color = 'green';
    }
    return color;
  }

  noteStyle(x) {
    let result;
    if (x >= 0 && x<5) {
      result = '0';
    } else if (x >= 5 && x<8) {
      result = '1';
    } else {
      result = '2';
    }
    return result;
  }

}
