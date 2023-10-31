import {Component, OnInit} from '@angular/core';

import {Router} from "@angular/router";

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

