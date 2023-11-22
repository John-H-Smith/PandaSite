import {Injectable} from "@angular/core";
import {Project} from "../models/project.model";
import {ProjectDummys} from "../models/project.dummy";


@Injectable()
export class ProjectService {

  projects: Project[] = ProjectDummys;

  loadAllProjects(){
    //Endpoint aufruf BookEndpoint LoadAllBooks()
    return this.projects.slice();
  }

  loadProject(id: string){
    const project = this.projects.find(x => x.id === +id)
    return project;
  }
}
