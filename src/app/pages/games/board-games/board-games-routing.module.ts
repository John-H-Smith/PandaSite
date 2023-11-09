import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BoardGamesRoutes} from "./board-games.routes";
@NgModule({
  imports: [RouterModule.forChild(BoardGamesRoutes)],
  exports: [RouterModule]
})
export class BoardGamesRoutingModule { }
