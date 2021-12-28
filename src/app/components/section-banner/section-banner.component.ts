import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-banner',
  templateUrl: './section-banner.component.html',
  styleUrls: ['./section-banner.component.css']
})
export class SectionBannerComponent implements OnInit {

  @Input() bannerContent:any;
  constructor() { }

  ngOnInit() {
  }

}
