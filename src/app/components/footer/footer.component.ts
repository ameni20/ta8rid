import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // Déclaration des variables globales
  title :any;
  constructor() {

   }

  ngOnInit() {
    this.title = "Footer Component";
    console.log(this.title);
  }


  displayTitle(){
    console.log(this.title);

  }
}
