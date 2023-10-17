import {Component, ViewChild} from '@angular/core';
import { IngredientDummys } from 'src/app/core/models/ingredient.dummy';
import { Ingredient } from 'src/app/core/models/ingredient.model';
import {MatAccordion} from "@angular/material/expansion";
import {RecipeDescription} from "../../../core/models/recipe-description.model";
import {RecipeDescriptionDummy} from "../../../core/models/recipe-description.dummy";

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.scss']
})
export class RecipeViewComponent {
  ingredients: Ingredient[] = IngredientDummys;
  description: RecipeDescription[] = RecipeDescriptionDummy;
  @ViewChild(MatAccordion) accordion!: MatAccordion;



}
