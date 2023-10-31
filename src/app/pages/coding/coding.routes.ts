import {Routes} from "@angular/router";
import {CodingComponent} from "./coding.component";
import {ProjectViewComponent} from "./projects/project-view/project-view.component";
import {ProjectIdResolver} from "./projects/project.resolver";

export const CodingRoutes: Routes = [

  {
    path: '',
    redirectTo: 'projects',
    pathMatch: 'full'
  },

  {
    path: '',
    component: CodingComponent,
    children: [
      {
        path: 'projects',
        loadChildren: () => import('./projects/projects.module').then(x => x.ProjectsModule)
      },
      {
        path: 'projects/:projectTitle',
        resolve: {project: ProjectIdResolver},
        component: ProjectViewComponent
      },
    ]
  }
];
