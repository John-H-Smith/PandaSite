import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {GamesRoutes} from "./games.routes";

@NgModule({
  imports: [RouterModule.forChild(GamesRoutes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
