import {Routes} from "@angular/router";
import {BoardGamesComponent} from "./board-games.component";
export const BoardGamesRoutes: Routes = [

  {
    path: '',
    component: BoardGamesComponent,
    pathMatch: "prefix",
  }
]
