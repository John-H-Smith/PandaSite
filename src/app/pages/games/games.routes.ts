import {Routes} from "@angular/router";
import {GamesComponent} from "./games.component";
import {BoardGamesViewComponent} from "./board-games/board-games-view/board-games-view.component";
import {ProjectIdResolver} from "../coding/projects/project.resolver";
import {BoardGamesIdResolver} from "./games.resolver";

export const GamesRoutes: Routes = [
  {
    path: '',
    component: GamesComponent,
    children: [
      {
        path: 'boardgames',
        loadChildren: () => import('./board-games/board-games.module').then(x => x.BoardGamesModule)
      },
      {

        path: 'boardgames/:boardTitle',
        resolve: {project: BoardGamesIdResolver},
        component: BoardGamesViewComponent
      },
      {
        path: 'consolegames',
        loadChildren: () => import('./console-games/console-games.module').then(x => x.ConsoleGamesModule)
      },
      {
        path: 'pcgames',
        loadChildren: () => import('./pc-games/pc-games.module').then(x => x.PcGamesModule)
      },
    ]
  }
];
