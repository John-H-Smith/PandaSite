import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";
import {GamesComponent} from "./games.component";
import {GamesRoutingModule} from "./games-routing.module";


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GamesRoutingModule

  ],
  declarations: [GamesComponent],
  exports: [GamesComponent]
})
export class GamesModule {

}
