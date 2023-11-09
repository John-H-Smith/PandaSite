import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import {LibaryComponent} from "./libary.component";
import {BooksResolver} from "../book-view/book.resolver";
import {LibaryRoutingModule} from "./libary-routing.module";


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LibaryRoutingModule
  ],
  declarations: [LibaryComponent],
  exports: [LibaryComponent],
  providers: [BooksResolver]
})
export class LibaryModule {

}
