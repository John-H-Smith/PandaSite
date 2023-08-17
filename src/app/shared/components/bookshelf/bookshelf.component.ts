import {Component, Input} from '@angular/core';
import {Book} from "../../../core/models/book.model";
import {BookDummys} from "../../../core/models/books.dummy";
import {BookSpine} from "../container-book/container-book.component";

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.scss']
})
export class BookshelfComponent {
  @Input() public books?: BookSpine[];

}
