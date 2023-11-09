import {Routes} from "@angular/router";
import {PcGamesComponent} from "./pc-games.component";
export const PcGamesRoutes: Routes = [

  {
    path: '',
    component: PcGamesComponent,
    pathMatch: "prefix",
  }
]
