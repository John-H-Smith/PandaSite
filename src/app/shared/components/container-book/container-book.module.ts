import {NgModule} from "@angular/core";
import {MaterialModule} from "../../material.module";
import {CommonModule} from "@angular/common";
import {ContainerBookComponent} from "./container-book.component";
import {BookshelfModule} from "../bookshelf/bookshelf.module";

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    BookshelfModule,
  ],
  declarations: [ContainerBookComponent],
  exports: [ContainerBookComponent]
})
export class ContainerBookModule {

}
