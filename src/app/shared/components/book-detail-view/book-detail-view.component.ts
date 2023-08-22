import {Component, Input} from '@angular/core';
import {Book} from "../../../core/models/book.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-book-detail-view',
  templateUrl: './book-detail-view.component.html',
  styleUrls: ['./book-detail-view.component.scss']
})
export class BookDetailViewComponent {
  @Input() public book!: Book
  constructor(private _router: Router, private _route: ActivatedRoute) {
  }
}
