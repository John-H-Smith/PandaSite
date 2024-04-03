import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {GroceryListDialogComponent} from "./grocery-list-dialog/grocery-list-dialog.component";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  constructor( public router: Router, public dialog: MatDialog) {
  }

  openDialog(): void {
    this.dialog.open(GroceryListDialogComponent, {
      width: '250px',
    });
  }
}
