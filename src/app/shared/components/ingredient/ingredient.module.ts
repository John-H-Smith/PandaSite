import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { IngredientComponent } from "./ingredient.component";
import {MaterialModule} from "../../material.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
  ],
  declarations: [
    IngredientComponent
  ],
  exports: [
    IngredientComponent

  ]
})
export class IngredientModule {

}
