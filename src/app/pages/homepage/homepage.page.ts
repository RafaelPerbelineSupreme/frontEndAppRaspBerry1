import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  constructor() { }
  collection = [1,2,3,4,5,6,7,8,9,10];

  ngOnInit() {
  }
}
