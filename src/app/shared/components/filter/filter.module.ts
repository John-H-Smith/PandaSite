import {NgModule} from "@angular/core";
import {MaterialModule} from "../../material.module";
import { CommonModule } from "@angular/common";
import {FilterComponent} from "./filter.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [FilterComponent],
  exports: [FilterComponent]
})
export class FilterModule {

}
