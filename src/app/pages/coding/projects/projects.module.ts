import {NgModule} from "@angular/core";
import {ProjectsComponent} from "./projects.component";
import {ProjectViewComponent} from "./project-view/project-view.component";
import {ProjectsRoutingModule} from "./projects.routing.module";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../../shared/shared.module";
import {ProjectIdResolver, ProjectsResolver} from "./project.resolver";
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProjectsRoutingModule
  ],
  declarations: [ProjectsComponent, ProjectViewComponent],
  providers: [ProjectsResolver],
  exports: [ProjectsComponent]
})
export class ProjectsModule {

}
