import {Routes} from "@angular/router";
import { AppComponent } from "./app.component";
import { RouteData } from "./shared/models/RouteData";
import { HomeComponent } from "./pages/home/home.component";
import { BooksComponent } from "./pages/books/books.component";
import { RecipesComponent } from "./pages/recipes/recipes.component";


export const AppRoutes: Routes = [

    {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(x => x.HomeModule)
    },
    {
        path: 'books',
        loadChildren: () => import('./pages/books/books.module').then(x => x.BooksModule)
    },
    {
        path: 'recipes',
        loadChildren: () => import('./pages/recipes/recipes.module').then(x => x.RecipesModule)
    },
    {
      path: 'about-me',
      loadChildren: () => import('./pages/recipes/recipes.module').then(x => x.RecipesModule)
    },
    {
       path: '**',
       redirectTo: 'home',
       pathMatch: "full"
    }

];
