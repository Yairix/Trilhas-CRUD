import { SlicePipe } from '@angular/common';
import { 
  Component, 
  ElementRef, 
  OnInit, 
  Renderer2, 
  ViewChild 
} from '@angular/core';

@Component({
  selector: 'app-sideBar',
  templateUrl: './sideBar.component.html',
  styleUrls: ['./sideBar.component.css']
})
export class SideBarComponent implements OnInit {

  @ViewChild("side") side: ElementRef;
  @ViewChild("sliceBar") sliceBar: ElementRef;
  @ViewChild("barContent1") barContent1: ElementRef;
  @ViewChild("barContent2") barContent2: ElementRef;
  @ViewChild("barContent3") barContent3: ElementRef;

  slice: boolean = false;
  opacity: string = '0';
  visibility: string = 'hidden';

  constructor(private renderer: Renderer2) { }

  ngOnInit() {}

  toggleBar($event){
    
    this.slice = $event
    console.log(this.slice)

    if(visualViewport.width < 768){

      if(this.slice){

        this.renderer.setStyle(this.sliceBar.nativeElement, "width", "280px");
        this.renderer.setStyle(this.side.nativeElement, "width", "280px");
        this.renderer.setStyle(this.sliceBar.nativeElement, "visibility", "visible");
        this.renderer.setStyle(this.side.nativeElement, "visibility", "visible");
        this.opacity = '1';
        this.visibility = 'visible';
      } else {
  
        this.renderer.setStyle(this.sliceBar.nativeElement, "width", "0px");
        this.renderer.setStyle(this.side.nativeElement, "width", "0px");
        this.renderer.setStyle(this.sliceBar.nativeElement, "visibility", "hidden");
        this.renderer.setStyle(this.side.nativeElement, "visibility", "hidden");
        this.opacity = '0';
        this.visibility = 'hidden';
      }  

    } else {

      if(this.slice){

        this.renderer.setStyle(this.sliceBar.nativeElement, "width", "280px");
        this.renderer.setStyle(this.side.nativeElement, "width", "280px");
        this.renderer.setStyle(this.sliceBar.nativeElement, "visibility", "visible");
        this.renderer.setStyle(this.side.nativeElement, "visibility", "visible");
        this.opacity = '1';
        this.visibility = 'visible';
      } else {
  
        this.renderer.setStyle(this.sliceBar.nativeElement, "width", "80px");
        this.renderer.setStyle(this.side.nativeElement, "width", "80px");
        this.opacity = '0';
        this.visibility = 'hidden';
      }  
    }

    

  }

}
