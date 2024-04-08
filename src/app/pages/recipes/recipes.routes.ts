import {Routes} from "@angular/router";
import {RecipesComponent} from "./recipes.component";
import {BookIdResolver} from "../books/book-view/book.resolver";
import {BookViewComponent} from "../books/book-view/book-view.component";
import {RecipesCollectionComponent} from "./recipes-collection/recipes-collection.component";
import {RecipeViewComponent} from "./recipe-view/recipe-view.component";
import {ProjectIdResolver} from "../coding/projects/project.resolver";
import {RecipeIdResolver, RecipesResolver} from "./recipe.resolver";
import {RecipeCreateComponent} from "./recipe-create/recipe-create.component";
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
        resolve: {recipes: RecipesResolver},
        component: RecipesCollectionComponent
      },
      {
        path: 'collection/:recipeTitle',
        resolve: {recipe: RecipeIdResolver},
        component: RecipeViewComponent
      },
      {
        path: 'new',
        component: RecipeCreateComponent
      },
    ]
  }
];
