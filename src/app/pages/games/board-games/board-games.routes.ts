import {Routes} from "@angular/router";
import {BoardGamesComponent} from "./board-games.component";
import {BoardGamesViewComponent} from "./board-games-view/board-games-view.component";
export const BoardGamesRoutes: Routes = [

  {
    path: '',
    component: BoardGamesComponent,
    pathMatch: "prefix",
    children: [
      {

        path: 'boardgames/:boardTitle',
        component: BoardGamesViewComponent
      }
    ]
  }

]
