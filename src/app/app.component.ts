import { Component, HostListener, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Trilhas';

  mediaSub: Subscription;
  // deviceXs: boolean;
  innerWidth: any;

  constructor(public mediaObserver: MediaObserver){}

  ngOnInit(){
    // this.mediaSub = this.mediaObserver.media$.subscribe((result: MediaChange)=>{
    //   console.log(result)
    //   console.log(result.mqAlias)
    //   this.deviceXs = result.mqAlias === 'xs' ? true : false;
    //   this.hola = window.visualViewport.width;
    //   this.hola >= '768' ? true : false;
    //   console.log(window.visualViewport.width)
    //   console.log(this.hola)
    // })
  }

  @HostListener('window:resize', ['$event'])
    onResize(event) {
      
      this.innerWidth = innerWidth <= 768 ? true : false;

      console.log(innerWidth);
      console.log(this.innerWidth);
    }
}
