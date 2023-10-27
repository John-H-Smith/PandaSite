import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FriendsRoutes} from "./friends.routes";

@NgModule({
  imports: [RouterModule.forChild(FriendsRoutes)],
  exports: [RouterModule]
})
export class FriendsRoutingModule { }
