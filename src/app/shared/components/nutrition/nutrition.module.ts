import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NutritionComponent} from "./nutrition.component";

@NgModule({
  imports: [
     CommonModule
  ],
  declarations: [
    NutritionComponent
  ],
  exports: [
    NutritionComponent
  ]
})
export class NutritionModule {

}
