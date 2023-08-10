import {Component, OnInit} from '@angular/core';
import {Book} from "../../core/models/book.model";
import {BookDummys} from "../../core/models/books.dummy";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit{

  books: Book[] = BookDummys //Dummy
  ngOnInit() {
    //Service um Bücher vom Backend zuladen
  }
}

