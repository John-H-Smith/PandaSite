import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";
import {FriendsComponent} from "./friends.component";
import {FriendsRoutingModule} from "./friends.routing.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FriendsRoutingModule

  ],
  declarations: [FriendsComponent],
  exports: [FriendsComponent]
})
export class FriendsModule {

}
