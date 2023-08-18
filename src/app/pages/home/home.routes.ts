import {Routes} from "@angular/router";
import {BooksComponent} from "../books/books.component";
import {RecipesComponent} from "../recipes/recipes.component";
import {HomeComponent} from "./home.component";
import {AboutMeComponent} from "./about-me/about-me.component";


export const HomeRoutes: Routes = [

  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'about',
        component: AboutMeComponent,
      }
    ]
  }




];
