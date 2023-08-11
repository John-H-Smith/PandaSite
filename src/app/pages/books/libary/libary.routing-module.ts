import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {LibaryRoutes} from "./libary.routes";


@NgModule({
  imports: [RouterModule.forChild(LibaryRoutes)],
  exports: [RouterModule]
})
export class LibaryRoutingModule { }
