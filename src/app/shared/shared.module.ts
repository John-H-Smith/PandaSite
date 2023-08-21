import {NgModule} from "@angular/core";
import { MaterialModule } from "./material.module";
import {IconsModule} from "./icons/icons.module";
import {BookCardModule} from "./components/book-card/book-card.module";
import {ContainerBookModule} from "./components/container-book/container-book.module";
import {BookDetailViewModule} from "./components/book-detail-view/book-detail-view.module";

@NgModule({
    imports: [
      MaterialModule,
      IconsModule,
      BookCardModule,
      BookDetailViewModule,
      ContainerBookModule,
    ],
    exports: [
      MaterialModule,
      IconsModule,
      BookCardModule,
      BookDetailViewModule,
      ContainerBookModule,
    ]
})
export class SharedModule {
}
