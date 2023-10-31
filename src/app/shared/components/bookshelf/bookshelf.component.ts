import {Component, Input} from '@angular/core';
import {BookSpine} from "../container-book/container-book.component";

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.scss']
})
export class BookshelfComponent {
  @Input() public books?: BookSpine[];

}
