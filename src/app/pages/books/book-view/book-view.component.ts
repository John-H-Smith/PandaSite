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
  akzentFarbe: string = '';
  @HostBinding('style.--infoPaarColor') infoPaarColor = '#F3F3FB'


  constructor(private _route: ActivatedRoute) {

  }

  ngOnInit() {
    this.book = this._route.snapshot.data["book"];

    Object.keys(this.book.infos).forEach(key => this.infos.push({title: key, info: (this.book.infos as any)[key] }));

    // const colorThief = new ColorThief();
    // colorThief.getColorAsync("./assets/img/books/acotar_1.jpeg").then(x => console.log(x.toString()));
    // colorThief.getPaletteAsync("./assets/img/books/acotar_1.jpeg", 5).then(console.log);

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
