import {Routes} from "@angular/router";
import {ProjectsComponent} from "./projects.component";
import {ProjectsResolver} from "./project.resolver";
export const ProjectsRoutes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    pathMatch: "prefix",
    resolve: {projects: ProjectsResolver}

  }
];
