import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HomeRoutingModule} from "./home.routing.module";
import {SharedModule} from "../../shared/shared.module";
import {HomeComponent} from "./home.component";
import {AboutMeComponent} from "./about-me/about-me.component";
import {AboutMeRoutingModule} from "./about-me/about-me.routing-module";
import {AboutMeModule} from "./about-me/about-me.module";

@NgModule({
    imports: [
     CommonModule,
     HomeRoutingModule,
     SharedModule,
      AboutMeModule
    ],
    declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule {

}
