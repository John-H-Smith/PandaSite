import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import { BooksComponent } from "./books.component";
import { SharedModule } from "src/app/shared/shared.module";


@NgModule({
    imports: [
        CommonModule,
        SharedModule
  
    ],
    declarations: [BooksComponent],
    exports: [BooksComponent]
})
export class BooksModule {

}
