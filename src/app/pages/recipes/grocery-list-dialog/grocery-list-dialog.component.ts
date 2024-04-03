import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-grocery-list-dialog',
  templateUrl: './grocery-list-dialog.component.html',
  styleUrls: ['./grocery-list-dialog.component.scss']
})
export class GroceryListDialogComponent {
  constructor(public dialogRef: MatDialogRef<GroceryListDialogComponent>) {}
  printRecipe() {
    window.print();
  }
}
