import { Component, Input, OnInit } from '@angular/core';
import { Ingredient, Unit } from 'src/app/core/models/recipe.model';

export interface Grocery {
  name: string,
  amount: string,
  unit: string
}

@Component({
  selector: 'app-ingredient-list-item',
  templateUrl: './ingredient-list-item.component.html',
  styleUrls: ['./ingredient-list-item.component.scss']
})
export class IngredientListItemComponent implements OnInit{

  @Input() grocery!: Grocery;
  @Input() units!: Unit[];
  selected = '';

  ngOnInit(): void {
    this.selected = this.grocery.unit;
  }

}
