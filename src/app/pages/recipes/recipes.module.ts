import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import { SharedModule } from "../../shared/shared.module";
import { RecipesComponent } from "./recipes.component";
import {RecipesRoutingModule} from "./recipes.routing-module";
import {RecipesCollectionComponent} from "./recipes-collection/recipes-collection.component";
import {RecipeViewComponent} from "./recipe-view/recipe-view.component";
import {RecipeIdResolver, RecipesResolver} from "./recipe.resolver";
import { GroceryListDialogComponent } from './grocery-list-dialog/grocery-list-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RecipesRoutingModule

    ],
    declarations: [RecipesComponent, RecipesCollectionComponent, RecipeViewComponent, GroceryListDialogComponent],
    providers: [RecipeIdResolver, RecipesResolver],
    exports: [RecipesComponent]
})
export class RecipesModule {

}
