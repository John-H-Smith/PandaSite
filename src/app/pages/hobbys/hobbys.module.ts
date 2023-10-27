import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";
import {HobbysComponent} from "./hobbys.component";
import {HobbysRoutingModule} from "./hobbys.routing.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HobbysRoutingModule

  ],
  declarations: [HobbysComponent],
  exports: [HobbysComponent]
})
export class HobbysModule {

}
