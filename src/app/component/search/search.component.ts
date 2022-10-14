import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  main = '';
  innerWidth = window.innerWidth;
  half2 = '';
  setting = '';
  profile = 'd-none';
  friend = 'd-none';
  addFriend = 'd-none';
  plans = 'd-none';
  stars = 'd-none';
  constructor() {}

  ngOnInit(): void {
    if (window.innerWidth < 768) {
      this.main = ' container py-4 ';
    } else {
      this.main = '  p-4 ';
    }
    if (window.innerWidth < 600) {
      this.half2 = 'col-12';
    } else {
      this.half2 = 'col-9';
    }
  }

  dnone(){
    this.setting='d-none'
    this.profile='d-none'
    this.friend='d-none'
    this.addFriend='d-none'
    this.plans='d-none'
    this.stars='d-none'
  }
}
