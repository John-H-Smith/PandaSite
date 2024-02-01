import {NgModule} from "@angular/core";
import {MaterialModule} from "../../material.module";
import {RouterLink} from "@angular/router";
import {RecipeCardComponent} from "./recipe-card.component";
import {InfoPaarModule} from "../info-paar/info-paar.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {IconsModule} from "../../icons/icons.module";
import { CommonModule } from "@angular/common";
import {SharedModule} from "../../shared.module";
import {CustomTagModule} from "../custom-tag/custom-tag.module";

@NgModule({
  imports: [
    MaterialModule,
    RouterLink,
    InfoPaarModule,
    FontAwesomeModule,
    CommonModule,
    IconsModule,
    CustomTagModule,
  ],
  declarations: [RecipeCardComponent],
  exports: [RecipeCardComponent]
})
export class RecipeCardModule {

}
