import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

declare const window: any;
export interface Category {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})

export class SearchComponent implements OnInit {
  categoties: Category[] = [
    { value: 'Category', viewValue: 'Category' },
    { value: 'Category-1', viewValue: 'Category-1' },
    { value: 'Category-2', viewValue: 'Category-2' }
  ];

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
