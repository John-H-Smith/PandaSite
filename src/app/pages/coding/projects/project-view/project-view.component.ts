import {Component, OnInit} from '@angular/core';
import ColorThief from "color-thief-ts";
import {ActivatedRoute} from "@angular/router";
import {Project} from "../../../../core/models/project.model";

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit{
  project!: Project;
  constructor(private _route: ActivatedRoute) {

  }

  ngOnInit() {
    this.project = this._route.snapshot.data["project"];
    console.log(this.project)
  }
}
