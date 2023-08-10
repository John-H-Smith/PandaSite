import {NgModule} from "@angular/core";
import {BookCardComponent} from "./book-card.component";
import {MaterialModule} from "../../material.module";

@NgModule({
  imports: [
    MaterialModule
  ],
  declarations: [BookCardComponent],
  exports: [BookCardComponent]
})
export class BookCardModule {

}
