import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HobbysRoutes} from "./hobbys.routes";

@NgModule({
  imports: [RouterModule.forChild(HobbysRoutes)],
  exports: [RouterModule]
})
export class HobbysRoutingModule { }
