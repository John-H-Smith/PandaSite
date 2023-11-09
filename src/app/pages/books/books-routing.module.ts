import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BooksRoutes} from "./books.routes";


@NgModule({
  imports: [RouterModule.forChild(BooksRoutes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
