import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import {LibaryComponent} from "./libary.component";
import {LibaryRoutingModule} from "./libary.routing-module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LibaryRoutingModule

  ],
  declarations: [LibaryComponent],
  exports: [LibaryComponent]
})
export class LibaryModule {

}
