import {NgModule} from "@angular/core";
import { MaterialModule } from "./material.module";
import {IconsModule} from "./icons/icons.module";
import {BookCardModule} from "./components/book-card/book-card.module";
import {ContainerBookModule} from "./components/container-book/container-book.module";
import {BookDetailViewModule} from "./components/book-detail-view/book-detail-view.module";
import {InfoPaarModule} from "./components/info-paar/info-paar.module";
import {RecipeCardModule} from "./components/recipe-card/recipe-card.module";
import { IngredientModue } from "./components/ingredient/ingredient.module";
import {CookingStepModule} from "./components/cooking-step/cookingStep.module";

@NgModule({
    imports: [
      MaterialModule,
      IconsModule,
      BookCardModule,
      BookDetailViewModule,
      ContainerBookModule,
      InfoPaarModule,
      RecipeCardModule,
      IngredientModue,
      CookingStepModule
    ],
    exports: [
      MaterialModule,
      IconsModule,
      BookCardModule,
      BookDetailViewModule,
      ContainerBookModule,
      InfoPaarModule,
      RecipeCardModule,
      IngredientModue,
      CookingStepModule

    ]
})
export class SharedModule {
}
