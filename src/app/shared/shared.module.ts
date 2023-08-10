import {NgModule} from "@angular/core";
import { MaterialModule } from "./material.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {IconsModule} from "./icons/icons.module";

@NgModule({
    imports: [
      MaterialModule,
      IconsModule
    ],
    exports: [
        MaterialModule,
      IconsModule
    ]
})
export class SharedModule {
}
