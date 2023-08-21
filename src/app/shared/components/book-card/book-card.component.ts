import {Component, Input} from '@angular/core';
import {myCustomTooltipDefaults} from "../tooltip/tooltip.component";
import {MAT_TOOLTIP_DEFAULT_OPTIONS} from "@angular/material/tooltip";
import {ActivatedRoute, Router} from "@angular/router";
import {Book} from "../../../core/models/book.model";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
  providers: [{provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults}],
})
export class BookCardComponent {
  @Input() public book!: Book
  currentState: string = '';
  constructor(private _router: Router, private _route: ActivatedRoute) {
  }
  clickedViewDetail(){
    this.currentState =  this._router.routerState.snapshot.url;

   const splitedState = this.currentState.split('/');

   console.log(splitedState.reverse())

    this._router.navigate(['books/' + splitedState[0], this.book.id])
  }
}
