import {NgModule} from "@angular/core";
import {MaterialModule} from "../../material.module";
import {CommonModule} from "@angular/common";
import {CookingStepComponent} from "./cooking-step.component";

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
  ],
  declarations: [CookingStepComponent,
  ],
  exports: [CookingStepComponent,
  ]
})
export class CookingStepModule {

}
