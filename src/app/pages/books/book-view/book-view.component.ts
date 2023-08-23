import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import {Book} from "../../../core/models/book.model";
import {CustomTableColumn} from "../../../shared/components/table/table.model";
// @ts-ignore
import {ColorGenerator} from "../../../../assets/colorGenerator.js"
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

  constructor(private _route: ActivatedRoute) {

  }

  ngOnInit() {
    this.book = this._route.snapshot.data["book"];


    // console.log(this.book.infos);
    // const data  = JSON.stringify(this.book.infos).split("categories");
    // const categories = data[1];
    // console.log(categories)
    //
    // const infoPaarStrings = data[0].split(",");
    // infoPaarStrings.forEach(x => {
    //   x = x.replace("'\'", "");
    //   x = x.replaceAll('"', "");
    //   x = x.replace("{", "");
    //   x = x.replace("}", "");
    //   x = x.trim();
    //   const rawData = x.split(":")
    //   const title = rawData[0];
    //   const info = rawData[1];
    //   const data = {title: title, info: info}
    //   this.infos.push(data)
    // })
    // this.infos =  this.infos.filter(x => x.info !== undefined && x.title !== '')
    //
    // console.log(this.infos)
    Object.keys(this.book.infos).forEach(key => this.infos.push({title: key, info: (this.book.infos as any)[key] }));



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
