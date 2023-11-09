import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import {PandaShelfComponent} from "./panda-shelf.component";
import {PandaShelfRoutingModule} from "./panda-shelf-routing.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PandaShelfRoutingModule
  ],
  declarations: [PandaShelfComponent],
  exports: [PandaShelfComponent]
})
export class PandaShelfModule {

}
