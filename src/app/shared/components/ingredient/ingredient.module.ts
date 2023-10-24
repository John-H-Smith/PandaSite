import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { IngredientComponent } from "./ingredient.component";

@NgModule({
  imports: [
    CommonModule
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
