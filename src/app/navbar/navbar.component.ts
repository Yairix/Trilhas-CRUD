import { 
  Component, 

  Output, 
  EventEmitter, 

  ViewChild, 
  ElementRef, 
  Renderer2
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  slice: boolean = false;

  @ViewChild("hamburger") hamburger: ElementRef;

  @Output() toggle = new EventEmitter<boolean>();

  constructor(private renderer: Renderer2) { }

  onClick() {

    this.slice = !this.slice;

    if(this.slice){
    this.renderer.setAttribute(this.hamburger.nativeElement, "aria-expanded", "true");
    } else {
    this.renderer.setAttribute(this.hamburger.nativeElement, "aria-expanded", "false");
    }
    
    this.toggle.emit(this.slice);
  }

}
