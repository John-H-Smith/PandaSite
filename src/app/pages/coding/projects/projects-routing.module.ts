import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ProjectsRoutes} from "./projects.routes";

@NgModule({
  imports: [RouterModule.forChild(ProjectsRoutes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
