import { Component, Output, EventEmitter } from '@angular/core';
import { HostListener } from '@angular/core';

declare const window: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() public sidenavToggle = new EventEmitter();

  bgcolor = 'transparent';

  // використовується для sidebar
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  // використовується для зміни кольора хедера
  @HostListener('window:scroll', [])
  onWindowScroll() {

    // tslint:disable-next-line:variable-name
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 1) {
      // console.log('You are 100px from the top to bottom');
      return this.bgcolor = 'white';
    }
    if (number < 1) {
      return this.bgcolor = 'transparent';
    }
  }
}
