import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import { SharedModule } from "../../shared/shared.module";
import { RecipesComponent } from "./recipes.component";
import {RecipesRoutingModule} from "./recipes.routing-module";
import {RecipesCollectionComponent} from "./recipes-collection/recipes-collection.component";
import {RecipeViewComponent} from "./recipe-view/recipe-view.component";
import {RecipeIdResolver, RecipesResolver} from "./recipe.resolver";
import { GroceryListDialogComponent } from './grocery-list-dialog/grocery-list-dialog.component';
import {FormsModule} from "@angular/forms";
import { IngredientListItemComponent } from './grocery-list-dialog/ingredient-list-item/ingredient-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RecipesRoutingModule,
    FormsModule

  ],
    declarations: [RecipesComponent, RecipesCollectionComponent, RecipeViewComponent, GroceryListDialogComponent, IngredientListItemComponent],
    providers: [RecipeIdResolver, RecipesResolver],
    exports: [RecipesComponent]
})
export class RecipesModule {

}
