import {Component, Input} from '@angular/core';
import {BookSpine} from "../../container-book/container-book.component";

@Component({
  selector: 'app-book-spine',
  templateUrl: './book-spine.component.html',
  styleUrls: ['./book-spine.component.scss']
})
export class BookSpineComponent {
  @Input() public book?: BookSpine;

}
