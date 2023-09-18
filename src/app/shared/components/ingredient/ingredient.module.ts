import {NgModule} from "@angular/core";
import {MaterialModule} from "../../material.module";
import {CommonModule} from "@angular/common";
import {MatTableModule} from "@angular/material/table";
import { IngredientComponent } from "./ingredient.component";

@NgModule({
  imports: [
    MaterialModule, CommonModule, MatTableModule
  ],
  declarations: [
    IngredientComponent
  ],
  exports: [
    IngredientComponent

  ]
})
export class IngredientModue {

}
