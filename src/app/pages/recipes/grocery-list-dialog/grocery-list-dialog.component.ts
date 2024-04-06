import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MAT_TOOLTIP_DEFAULT_OPTIONS} from "@angular/material/tooltip";
import {myCustomTooltipDefaults} from "../../../shared/components/tooltip/tooltip.component";
import { RecipesService } from 'src/app/core/services/recipes.service';
import { Ingredient, Unit } from 'src/app/core/models/recipe.model';
import { Observable } from 'rxjs';
import { GroceryListService } from 'src/app/core/services/groceryList.service';
import { UnitService } from 'src/app/core/services/unit.service';
import { Grocery } from './ingredient-list-item/ingredient-list-item.component';

@Component({
  selector: 'app-grocery-list-dialog',
  templateUrl: './grocery-list-dialog.component.html',
  styleUrls: ['./grocery-list-dialog.component.scss'],
  providers: [{provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults}],
})
export class GroceryListDialogComponent implements OnInit{
  constructor(public dialogRef: MatDialogRef<GroceryListDialogComponent>, private _groceryService: GroceryListService, private _unitService: UnitService) {}

  groceryListIngredients: Grocery[] = [];
  units: Unit[] = [];

  ngOnInit(): void {
    this.groceryListIngredients = this._groceryService.getIngredientsForGroceryList();
    this._unitService.loadAllAmountUnits().subscribe(x => this.units = x);
    console.log(this.groceryListIngredients)
  }

  printRecipe() {
    window.print();
  }
}
