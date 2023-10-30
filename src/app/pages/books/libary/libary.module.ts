import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import {LibaryComponent} from "./libary.component";
import {LibaryRoutingModule} from "./libary.routing-module";
import {BooksResolver} from "../book-view/book.resolver";
import { EndpointModule } from "src/app/core/endpoints/endpoints.module";
import { BookEndpoint } from "src/app/core/endpoints/book.endpoint";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LibaryRoutingModule,
    EndpointModule

  ],
  declarations: [LibaryComponent],
  exports: [LibaryComponent],
  providers: [BooksResolver]
})
export class LibaryModule {

}
