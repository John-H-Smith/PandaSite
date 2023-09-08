import {Routes} from "@angular/router";
import {RecipesComponent} from "./recipes.component";
import {BookIdResolver} from "../books/book-view/book.resolver";
import {BookViewComponent} from "../books/book-view/book-view.component";
import {RecipesCollectionComponent} from "./recipes-collection/recipes-collection.component";
export const RecipesRoutes: Routes = [

  {
    path: '',
    component: RecipesComponent,
    pathMatch: "prefix",
    children: [
      {
        path: 'collection',
        component: RecipesCollectionComponent
      },

    ]
  }
];
