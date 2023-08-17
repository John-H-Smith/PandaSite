
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {PandaShelfRoutes} from "./panda-shelf.routes";


@NgModule({
  imports: [RouterModule.forChild(PandaShelfRoutes)],
  exports: [RouterModule]
})
export class PandaShelfRoutingModule { }
