import {Routes} from "@angular/router";
import {ConsoleGamesComponent} from "./console-games.component";
export const ConsoleGamesRoutes: Routes = [

  {
    path: '',
    component: ConsoleGamesComponent,
    pathMatch: "prefix",
  }
]
