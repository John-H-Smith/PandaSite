import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import {AboutMeRoutingModule} from "./about-me.routing-module";
import {AboutMeComponent} from "./about-me.component";


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AboutMeRoutingModule
  ],
  declarations: [AboutMeComponent],
  exports: [AboutMeComponent]
})
export class AboutMeModule {

}
