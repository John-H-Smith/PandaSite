import {NgModule} from "@angular/core";
import {MaterialModule} from "../../material.module";
import {CommonModule} from "@angular/common";
import {MatTableModule} from "@angular/material/table";
import {InfoPaarComponent} from "./info-paar.component";

@NgModule({
  imports: [
    MaterialModule, CommonModule, MatTableModule
  ],
  declarations: [
    InfoPaarComponent
  ],
  exports: [
    InfoPaarComponent
  ]
})
export class InfoPaarModule {

}
