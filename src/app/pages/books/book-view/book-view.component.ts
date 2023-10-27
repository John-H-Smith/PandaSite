import {Component, HostBinding, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import {Book} from "../../../core/models/book.model";
import {CustomTableColumn} from "../../../shared/components/table/table.model";
import ColorThief from "color-thief-ts";

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss']
})
export class BookViewComponent implements OnInit{

  book!: Book;
  infos: Tile[] = [];
  displayedColumnsDatei: CustomTableColumn[] = [];
  @HostBinding('style.--infoPaarColor') infoPaarColor = '#F3F3FB'
  @HostBinding('style.--akzentColor') akzentColor = '';



  constructor(private _route: ActivatedRoute) {

  }

  ngOnInit() {
    this.book = this._route.snapshot.data["book"];

    Object.keys(this.book.infos).forEach(key => this.infos.push({title: key, info: (this.book.infos as any)[key] }));

    const colorThief = new ColorThief();
    colorThief.getColorAsync("./" + this.book.img).then(x => this.akzentColor = x.toString());

    this.displayedColumnsDatei = [
      {
        title: '',
        id: 'title'
      },
      {
        title: '',
        id: 'info'
      },
    ];
  }
}

export interface Tile {
  title: string;
  info: string;
}
