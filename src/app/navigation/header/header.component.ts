import { Component, Input, OnInit, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  innerWidth: boolean;
  
  @Output() public sidenavToggle = new EventEmitter;

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  @HostListener('window:resize', ['$event'])
    onResize(event) {
      
      this.innerWidth = window.innerWidth <= 767 ? true : false;

      console.log(innerWidth);
      console.log(this.innerWidth);
    }
}
