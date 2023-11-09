import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {GamesRoutes} from "./gamesRoutes";

@NgModule({
  imports: [RouterModule.forChild(GamesRoutes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
