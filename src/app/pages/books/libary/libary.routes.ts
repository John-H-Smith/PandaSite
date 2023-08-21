import {Routes} from "@angular/router";
import {LibaryComponent} from "./libary.component";
import {BookViewComponent} from "../book-view/book-view.component";
import {BooksResolver} from "../book-view/book.resolver";
export const LibaryRoutes: Routes = [

  {
    path: '',
    component: LibaryComponent,
    pathMatch: "prefix",
    resolve: {books: BooksResolver}
  }
]
