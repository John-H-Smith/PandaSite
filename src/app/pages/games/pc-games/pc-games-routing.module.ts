import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {PcGamesRoutes} from "./pc-games.routes";
@NgModule({
  imports: [RouterModule.forChild(PcGamesRoutes)],
  exports: [RouterModule]
})
export class PcGamesRoutingModule { }
