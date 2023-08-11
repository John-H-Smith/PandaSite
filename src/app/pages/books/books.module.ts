import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import { BooksComponent } from "./books.component";
import { SharedModule } from "src/app/shared/shared.module";
import {BooksRoutingModule} from "./books.routing.module";
import {LibaryModule} from "./libary/libary.module";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        BooksRoutingModule,
    ],
    declarations: [BooksComponent],
    exports: [BooksComponent]
})
export class BooksModule {

}
