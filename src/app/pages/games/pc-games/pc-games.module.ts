import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../../shared/shared.module";
import {PcGamesComponent} from "./pc-games.component";
import {PcGamesRoutingModule} from "./pc-games-routing.module";


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PcGamesRoutingModule

  ],
  declarations: [PcGamesComponent],
  exports: [PcGamesComponent]
})
export class PcGamesModule {

}
