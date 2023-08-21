import {NgModule} from "@angular/core";
import {BookCardComponent} from "./book-card.component";
import {MaterialModule} from "../../material.module";
import {RouterLink} from "@angular/router";

@NgModule({
    imports: [
        MaterialModule,
        RouterLink
    ],
  declarations: [BookCardComponent],
  exports: [BookCardComponent]
})
export class BookCardModule {

}
