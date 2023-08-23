import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-info-paar',
  templateUrl: './info-paar.component.html',
  styleUrls: ['./info-paar.component.scss']
})
export class InfoPaarComponent {
  @Input() public title?: string;
  @Input() public info?: string;

}
