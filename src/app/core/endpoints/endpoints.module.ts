import {NgModule} from "@angular/core";
import { BookEndpoint } from "./book.endpoint";

@NgModule({
    providers: [
        BookEndpoint
    ],

})
export class EndpointsModule {
}
