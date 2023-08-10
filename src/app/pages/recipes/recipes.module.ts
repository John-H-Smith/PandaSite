import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import { SharedModule } from "../../shared/shared.module";
import { RecipesComponent } from "./recipes.component";
import {RecipesRoutingModule} from "./recipes.routing-module";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RecipesRoutingModule

    ],
    declarations: [RecipesComponent],
    exports: [RecipesComponent]
})
export class RecipesModule {

}
