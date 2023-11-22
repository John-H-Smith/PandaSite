import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Project} from "../../../core/models/project.model";
import {ProjectService} from "../../../core/services/project.service";
@Injectable()
export class ProjectIdResolver implements Resolve<Project> {
  constructor( private _service: ProjectService
  ) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Project> | Observable<Project> | Project {
    const id =  route.params["projectTitle"];
    return  this._service.loadProject(id)!
  }
}

@Injectable()
export class ProjectsResolver implements Resolve<Project[]> {
  constructor( private _service: ProjectService
  ) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Project[]> | Observable<Project[]> | Project[] {
    return  this._service.loadAllProjects()
  }
}


