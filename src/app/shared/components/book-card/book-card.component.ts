import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {
  @Input() public title?: string;
  @Input() public author?: string;
  @Input() public short_description?: string;

  @Input() public url?: string;
}
