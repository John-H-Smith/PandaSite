import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";
import {CodingComponent} from "./coding.component";
import {CodingRoutingModule} from "./coding.routing.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CodingRoutingModule
  ],
  declarations: [CodingComponent],
  exports: [CodingComponent]
})
export class CodingModule {

}
