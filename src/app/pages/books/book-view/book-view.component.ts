import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import {Book} from "../../../core/models/book.model";
import {CustomTableColumn} from "../../../shared/components/table/table.model";
import {BookInfo} from "../../../core/models/book-info.model";

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss']
})
export class BookViewComponent implements OnInit{

  book!: Book;

  constructor(private _route: ActivatedRoute) {
  }

  ngOnInit() {
    this.book = this._route.snapshot.data["book"];


  }

}
