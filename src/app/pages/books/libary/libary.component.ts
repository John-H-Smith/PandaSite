import { Component } from '@angular/core';
import {BookDummys} from "../../../core/models/books.dummy";
import {Book} from "../../../core/models/book.model";

@Component({
  selector: 'app-libary',
  templateUrl: './libary.component.html',
  styleUrls: ['./libary.component.scss']
})
export class LibaryComponent {
  books: Book[] = BookDummys //Dummy
}
