import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BoardGamesComponent} from "./board-games.component";
import {SharedModule} from "../../../shared/shared.module";
import {BoardGamesRoutingModule} from "./board-games-routing.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BoardGamesRoutingModule


  ],
  declarations: [BoardGamesComponent],
  exports: [BoardGamesComponent]
})
export class BoardGamesModule {

}
