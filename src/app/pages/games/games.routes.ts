import {Routes} from "@angular/router";
import {GamesComponent} from "./games.component";

export const GamesRoutes: Routes = [
  {
    path: '',
    component: GamesComponent,
    children: [
      {
        path: 'boardgames',
        loadChildren: () => import('./board-games/board-games.module').then(x => x.BoardGamesModule)
      },
      //GameDetailView
      // {
      //   path: 'boardgames/:boardTitle',
      //   resolve: {project: ProjectIdResolver},
      //   component: ProjectViewComponent
      // },
      {
        path: 'consolegames',
        loadChildren: () => import('./console-games/console-games.module').then(x => x.ConsoleGamesModule)
      },
      // {
      //   path: 'consolegames/:ps4Title',
      //   resolve: {project: ProjectIdResolver},
      //   component: ProjectViewComponent
      // },
      {
        path: 'pcgames',
        loadChildren: () => import('./pc-games/pc-games.module').then(x => x.PcGamesModule)
      },
      // {
      //   path: 'consolegames/:steamTitle',
      //   resolve: {project: ProjectIdResolver},
      //   component: ProjectViewComponent
      // },
    ]
  }
];
