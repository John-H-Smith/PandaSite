import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import { BooksComponent } from "./books.component";
import { SharedModule } from "src/app/shared/shared.module";
import {BooksRoutingModule} from "./books-routing.module";
import {BookViewComponent} from "./book-view/book-view.component";
import {BookIdResolver} from "./book-view/book.resolver";
import {TableModule} from "../../shared/components/table/table.module";
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BooksRoutingModule,
    TableModule
  ],
    declarations: [BooksComponent, BookViewComponent],
  providers: [BookIdResolver],
    exports: [BooksComponent]
})
export class BooksModule {

}
