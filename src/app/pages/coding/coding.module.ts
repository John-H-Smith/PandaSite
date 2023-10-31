import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";
import {CodingComponent} from "./coding.component";
import {CodingRoutingModule} from "./coding.routing.module";
import {ProjectIdResolver} from "./projects/project.resolver";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CodingRoutingModule
  ],
  declarations: [CodingComponent],
  exports: [CodingComponent],
  providers: [ProjectIdResolver]
})
export class CodingModule {

}
