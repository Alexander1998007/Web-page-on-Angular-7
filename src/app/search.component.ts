import { Component, OnInit } from '@angular/core';
import { HostListener} from '@angular/core';

declare const window: any;

@Component({
  selector: 'app-search-component',
  templateUrl: './html/search.component.html',
  styleUrls: ['./scss/search.component.scss'],
})

export class SearchComponent implements OnInit {
  constructor() {

  }

  ngOnInit() { }

  @HostListener('window:scroll', [])
  onWindowScroll() {

    // tslint:disable-next-line:variable-name
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 100) {
      console.log('You are 100px from the top to bottom');
    } else if (number > 500) {
      console.log('You are 500px from the top to bottom');
    }
  }
}
