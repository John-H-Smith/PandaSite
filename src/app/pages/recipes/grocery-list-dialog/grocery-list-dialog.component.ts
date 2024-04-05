import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MAT_TOOLTIP_DEFAULT_OPTIONS} from "@angular/material/tooltip";
import {myCustomTooltipDefaults} from "../../../shared/components/tooltip/tooltip.component";

@Component({
  selector: 'app-grocery-list-dialog',
  templateUrl: './grocery-list-dialog.component.html',
  styleUrls: ['./grocery-list-dialog.component.scss'],
  providers: [{provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults}],
})
export class GroceryListDialogComponent {
  constructor(public dialogRef: MatDialogRef<GroceryListDialogComponent>) {}
  printRecipe() {
    window.print();
  }
}
