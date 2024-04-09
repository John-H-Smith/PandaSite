import { NgModule } from "@angular/core";
import {BooksService} from "./books.service";
import {ProjectService} from "./project.service";
import {RecipesService} from "./recipes.service";
import { GroceryListService } from "./groceryList.service";
import { UnitService } from "./unit.service";


@NgModule({
  providers: [
    BooksService,
    ProjectService,
    RecipesService,
    GroceryListService,
    UnitService
  ]
})
export class ServicesModule {

}
