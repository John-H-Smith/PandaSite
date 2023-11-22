import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";
import {GamesComponent} from "./games.component";
import {GamesRoutingModule} from "./games-routing.module";
import {BoardGamesViewComponent} from "./board-games/board-games-view/board-games-view.component";
import {BoardGamesIdResolver} from "./games.resolver";
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GamesRoutingModule

  ],
  declarations: [GamesComponent, BoardGamesViewComponent],
  exports: [GamesComponent],
  providers: [BoardGamesIdResolver]
})
export class GamesModule {

}
