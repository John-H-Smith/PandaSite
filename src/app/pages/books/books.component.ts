import {Component, OnInit} from '@angular/core';
import {Book} from "../../core/models/book.model";
import {BookDummys} from "../../core/models/books.dummy";
import {Router} from "@angular/router";
import { BookEndpoint } from 'src/app/core/endpoints/book.endpoint';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit{

  constructor( public router: Router) {
  }

  ngOnInit() {
    //Service um Bücher vom Backend zuladen
  }
}

