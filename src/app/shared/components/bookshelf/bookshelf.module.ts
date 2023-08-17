import {NgModule} from "@angular/core";
import {MaterialModule} from "../../material.module";
import {BookshelfComponent} from "./bookshelf.component";
import {BookSpineComponent} from "./book-spine/book-spine.component";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    MaterialModule,
    CommonModule
  ],
  declarations: [BookshelfComponent, BookSpineComponent],
  exports: [BookshelfComponent, ]
})
export class BookshelfModule {

}
