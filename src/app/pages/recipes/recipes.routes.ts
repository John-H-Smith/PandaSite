import {Routes} from "@angular/router";
import {RecipesComponent} from "./recipes.component";
import {BookIdResolver} from "../books/book-view/book.resolver";
import {BookViewComponent} from "../books/book-view/book-view.component";
import {RecipesCollectionComponent} from "./recipes-collection/recipes-collection.component";
import {RecipeViewComponent} from "./recipe-view/recipe-view.component";
export const RecipesRoutes: Routes = [

  //nur solange es noch keine Genre Slider gibt
  {
    path: '',
    redirectTo: 'collection',
    pathMatch: 'full'
  },

  {
    path: '',
    component: RecipesComponent,
    pathMatch: "prefix",
    children: [
      {
        path: 'collection',
        component: RecipesCollectionComponent
      },
      {
        path: 'collection/:recipeTitle',
        component: RecipeViewComponent
      },
    ]
  }
];
