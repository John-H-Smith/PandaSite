import {NgModule} from "@angular/core";
import {MaterialModule} from "../../material.module";
import { CommonModule } from "@angular/common";
import {FilterComponent} from "./filter.component";

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
  ],
  declarations: [FilterComponent],
  exports: [FilterComponent]
})
export class FilterModule {

}
