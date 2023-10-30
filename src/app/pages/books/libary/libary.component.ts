import {Component, HostBinding, OnInit} from '@angular/core';
import {BookDummys} from "../../../core/models/books.dummy";
import {Book} from "../../../core/models/book.model";
import { BookEndpoint } from 'src/app/core/endpoints/book.endpoint';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-libary',
  templateUrl: './libary.component.html',
  styleUrls: ['./libary.component.scss']
})
export class LibaryComponent implements OnInit{
  books: Book[] = BookDummys //Dummy
  $books!: Observable<Book[]>

  constructor(private _endpoint: BookEndpoint){
    
  }

  ngOnInit() {
    //Service um Bücher vom Backend zuladen
    this.$books = this._endpoint.getBooks();

    this.$books.subscribe(x => {console.log(x)})
  }
}
