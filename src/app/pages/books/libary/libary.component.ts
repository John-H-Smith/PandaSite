import {Component, HostBinding, OnInit} from '@angular/core';
import {BookDummys} from "../../../core/models/books.dummy";
import {Book} from "../../../core/models/book.model";

@Component({
  selector: 'app-libary',
  templateUrl: './libary.component.html',
  styleUrls: ['./libary.component.scss']
})
export class LibaryComponent implements OnInit{
  books: Book[] = BookDummys //Dummy


  ngOnInit() {
    //Service um Bücher vom Backend zuladen
  }
}
