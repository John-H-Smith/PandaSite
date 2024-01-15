import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NutritionComponent} from "./nutrition.component";
import { MaterialModule } from "../../material.module";

@NgModule({
  imports: [
     CommonModule,
     MaterialModule
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
