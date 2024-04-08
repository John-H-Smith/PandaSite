import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import { SharedModule } from "../../shared/shared.module";
import { RecipesComponent } from "./recipes.component";
import {RecipesRoutingModule} from "./recipes.routing-module";
import {RecipesCollectionComponent} from "./recipes-collection/recipes-collection.component";
import {RecipeViewComponent} from "./recipe-view/recipe-view.component";
import {RecipeIdResolver, RecipesResolver} from "./recipe.resolver";
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RecipesRoutingModule,
    ReactiveFormsModule

  ],
    declarations: [RecipesComponent, RecipesCollectionComponent, RecipeViewComponent, RecipeCreateComponent],
    providers: [RecipeIdResolver, RecipesResolver],
    exports: [RecipesComponent]
})
export class RecipesModule {

}
