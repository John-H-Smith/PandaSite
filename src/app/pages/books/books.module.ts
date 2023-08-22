import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import { BooksComponent } from "./books.component";
import { SharedModule } from "src/app/shared/shared.module";
import {BooksRoutingModule} from "./books.routing.module";
import {BookViewComponent} from "./book-view/book-view.component";
import {BookIdResolver, BookResolver} from "./book-view/book.resolver";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        BooksRoutingModule,
    ],
    declarations: [BooksComponent, BookViewComponent],
  providers: [BookIdResolver],
    exports: [BooksComponent]
})
export class BooksModule {

}
