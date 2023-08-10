import {NgModule} from "@angular/core";
import { MaterialModule } from "./material.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {IconsModule} from "./icons/icons.module";
import {BookCardModule} from "./components/book-card/book-card.module";

@NgModule({
    imports: [
      MaterialModule,
      IconsModule,
      BookCardModule
    ],
    exports: [
        MaterialModule,
      IconsModule,
      BookCardModule

    ]
})
export class SharedModule {
}
