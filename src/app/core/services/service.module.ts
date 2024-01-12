import { NgModule } from "@angular/core";
import {BooksService} from "./books.service";
import {ProjectService} from "./project.service";
import {RecipesService} from "./recipes.service";


@NgModule({
  providers: [
    BooksService,
    ProjectService,
    RecipesService
  ]
})
export class ServicesModule {

}
