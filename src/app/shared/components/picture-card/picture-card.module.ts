import {NgModule} from "@angular/core";
import {MaterialModule} from "../../material.module";
import { CommonModule } from "@angular/common";
import {PictureCardComponent} from "./picture-card.component";

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
  ],
  declarations: [PictureCardComponent],
  exports: [PictureCardComponent]
})
export class PictureCardModule {

}
