import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AboutMeRoutes} from "./about-me.routes";
@NgModule({
  imports: [RouterModule.forChild(AboutMeRoutes)],
  exports: [RouterModule]
})
export class AboutMeRoutingModule { }
