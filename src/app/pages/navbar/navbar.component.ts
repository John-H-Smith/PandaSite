import {Component, ElementRef, EventEmitter, HostListener, OnInit, Output, Renderer2, ViewChild} from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
   
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const currentWidth = event.target.innerWidth;
    if(currentWidth > 650){
     this.toggle = false;
    }
  }

  toggle: boolean = false;

 

  triggerSideNav(){
    this.toggle = !this.toggle;
  }

  clickedOutside(){
    this.toggle = false;
  }
  

}
