import {NgModule} from "@angular/core";
import { BookEndpoint } from "./book.endpoint";
import {RecipeEndpoint} from "./recipe.endpoint";

@NgModule({
    providers: [
        BookEndpoint,
      RecipeEndpoint
    ],

})
export class EndpointsModule {
}
