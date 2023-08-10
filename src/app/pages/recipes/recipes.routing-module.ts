import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {RecipesRoutes} from "./recipes.routes";
@NgModule({
  imports: [RouterModule.forChild(RecipesRoutes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
