import {Component, ViewChild} from '@angular/core';
import { IngredientDummys } from 'src/app/core/models/ingredient.dummy';
import { Ingredient } from 'src/app/core/models/ingredient.model';
import {MatAccordion} from "@angular/material/expansion";

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.scss']
})
export class RecipeViewComponent {
  ingredients: Ingredient[] = IngredientDummys;
  @ViewChild(MatAccordion) accordion!: MatAccordion;



}
