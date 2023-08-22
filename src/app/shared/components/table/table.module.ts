import {NgModule} from "@angular/core";
import {MaterialModule} from "../../material.module";
import {CommonModule} from "@angular/common";
import {TableComponent} from "./table.component";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  imports: [
    MaterialModule, CommonModule, MatTableModule
  ],
  declarations: [
    TableComponent
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule {

}
