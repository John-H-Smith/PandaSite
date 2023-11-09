import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ConsoleGamesComponent} from "./console-games.component";
import {SharedModule} from "../../../shared/shared.module";
import {ConsoleGamesRoutingModule} from "./console-games-routing.module";


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ConsoleGamesRoutingModule

  ],
  declarations: [ConsoleGamesComponent],
  exports: [ConsoleGamesComponent]
})
export class ConsoleGamesModule {

}
