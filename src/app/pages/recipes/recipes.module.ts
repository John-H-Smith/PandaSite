import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import { SharedModule } from "../../shared/shared.module";
import { RecipesComponent } from "./recipes.component";

@NgModule({
    imports: [
        CommonModule,
        SharedModule
  
    ],
    declarations: [RecipesComponent],
    exports: [RecipesComponent]
})
export class RecipesModule {

}
