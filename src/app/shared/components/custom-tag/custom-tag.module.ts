import {NgModule} from "@angular/core";
import {MaterialModule} from "../../material.module";
import {CommonModule} from "@angular/common";
import {CustomTagComponent} from "./custom-tag.component";

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
  ],
  declarations: [CustomTagComponent,
  ],
  exports: [CustomTagComponent,
  ]
})
export class CustomTagModule {

}
