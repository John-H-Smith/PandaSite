import { Component } from '@angular/core';
import {Project} from "../../../core/models/project.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectService} from "../../../core/services/project.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [];
  constructor( public router: Router, private _service: ProjectService, private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.projects = this._service.loadAllProjects();
  }

  navigateToDetailPage(project: Project){
    const title = project.title.replaceAll(/\s+/g, "_").toLowerCase();
    this.router.navigate(['coding/projects/' + title])

  }
}
