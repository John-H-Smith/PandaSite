import {NgModule} from "@angular/core";
import { MaterialModule } from "./material.module";
import {IconsModule} from "./icons/icons.module";
import {BookCardModule} from "./components/book-card/book-card.module";
import {ContainerBookModule} from "./components/container-book/container-book.module";
import {BookDetailViewModule} from "./components/book-detail-view/book-detail-view.module";
import {InfoPaarModule} from "./components/info-paar/info-paar.module";
import {RecipeCardModule} from "./components/recipe-card/recipe-card.module";
import { IngredientModule } from "./components/ingredient/ingredient.module";
import {NutritionModule} from "./components/nutrition/nutrition.module";
import {PictureCardModule} from "./components/picture-card/picture-card.module";
import {InstructionStepModule} from "./components/instruction-step/instruction-step.module";
import {CustomTagModule} from "./components/custom-tag/custom-tag.module";
import {BurgerMenuComponent} from "./components/burger-menu/burger-menu.component";

@NgModule({
  imports: [
    MaterialModule,
    IconsModule,
    BookCardModule,
    BookDetailViewModule,
    ContainerBookModule,
    InfoPaarModule,
    RecipeCardModule,
    IngredientModule,
    PictureCardModule,
    InstructionStepModule,
    NutritionModule,
    CustomTagModule
  ],
  declarations: [
    BurgerMenuComponent
  ],
  exports: [
    MaterialModule,
    IconsModule,
    BookCardModule,
    BookDetailViewModule,
    CustomTagModule,
    ContainerBookModule,
    InstructionStepModule,
    InfoPaarModule,
    RecipeCardModule,
    IngredientModule,
    NutritionModule,
    PictureCardModule,
    BurgerMenuComponent

  ]
})
export class SharedModule {
}
