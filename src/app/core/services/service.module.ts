import { NgModule } from "@angular/core";
import {BooksService} from "./books.service";
import {ProjectService} from "./project.service";


@NgModule({
  providers: [
    BooksService,
    ProjectService
  ]
})
export class ServicesModule {

}
