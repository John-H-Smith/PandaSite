import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ConsoleGamesRoutes} from "./console-games.routes";
@NgModule({
  imports: [RouterModule.forChild(ConsoleGamesRoutes)],
  exports: [RouterModule]
})
export class ConsoleGamesRoutingModule { }
