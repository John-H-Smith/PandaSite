import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import { SharedModule } from "../../shared/shared.module";
import { RecipesComponent } from "./recipes.component";
import {RecipesRoutingModule} from "./recipes.routing-module";
import {RecipesCollectionComponent} from "./recipes-collection/recipes-collection.component";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RecipesRoutingModule

    ],
    declarations: [RecipesComponent, RecipesCollectionComponent],
    exports: [RecipesComponent]
})
export class RecipesModule {

}
