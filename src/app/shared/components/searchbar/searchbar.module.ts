import {NgModule} from "@angular/core";
import {MaterialModule} from "../../material.module";
import { CommonModule } from "@angular/common";
import {SearchbarComponent} from "./searchbar.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [SearchbarComponent],
  exports: [SearchbarComponent]
})
export class SearchbarModule {

}
