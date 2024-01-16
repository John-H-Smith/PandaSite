import {NgModule} from "@angular/core";
import {MaterialModule} from "../../material.module";
import {CommonModule} from "@angular/common";
import {InstructionStepComponent} from "./instruction-step.component";

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
  ],
  declarations: [InstructionStepComponent,
  ],
  exports: [InstructionStepComponent,
  ]
})
export class InstructionStepModule {

}
