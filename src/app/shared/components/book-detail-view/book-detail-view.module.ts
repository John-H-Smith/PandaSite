import {NgModule} from "@angular/core";
import {MaterialModule} from "../../material.module";
import {BookDetailViewComponent} from "./book-detail-view.component";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    MaterialModule,
    CommonModule
  ],
  declarations: [BookDetailViewComponent],
  exports: [BookDetailViewComponent]
})
export class BookDetailViewModule {

}
