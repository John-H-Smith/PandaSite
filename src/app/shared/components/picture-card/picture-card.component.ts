import {Component, Input} from '@angular/core';
@Component({
  selector: 'app-picture-card',
  templateUrl: './picture-card.component.html',
  styleUrls: ['./picture-card.component.scss']
})
export class PictureCardComponent {
  @Input() public title!: string;
  @Input() public description?: string;
  @Input() public img?: string;


}
