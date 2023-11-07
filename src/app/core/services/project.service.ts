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

  loadProject(titleId: string){

    const splited = titleId.split(':');
    const id = splited[1];
    console.log(id)

    const project = this.projects.find(x => x.id === +id)
    return project;
  }
}
