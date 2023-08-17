import {NgModule} from "@angular/core";
import { MaterialModule } from "./material.module";
import {IconsModule} from "./icons/icons.module";
import {BookCardModule} from "./components/book-card/book-card.module";
import {ContainerBookModule} from "./components/container-book/container-book.module";

@NgModule({
    imports: [
      MaterialModule,
      IconsModule,
      BookCardModule,
      ContainerBookModule
    ],
    exports: [
      MaterialModule,
      IconsModule,
      BookCardModule,
      ContainerBookModule
    ]
})
export class SharedModule {
}
