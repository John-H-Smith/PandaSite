import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CodingRoutes} from "./coding.routes";

@NgModule({
  imports: [RouterModule.forChild(CodingRoutes)],
  exports: [RouterModule]
})
export class CodingRoutingModule { }
