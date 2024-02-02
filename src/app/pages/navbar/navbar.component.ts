import {Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() toggleEvent = new EventEmitter();
  toggle: boolean = false;

  triggerSideNav(){
    this.toggle = !this.toggle;
    this.toggleEvent.emit(this.toggle);
  }
}
