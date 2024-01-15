import {Component, OnInit, ViewChild} from '@angular/core';
import { IngredientDummys } from 'src/app/core/models/ingredient.dummy';
import { Ingredient } from 'src/app/core/models/ingredient.model';
import {MatAccordion} from "@angular/material/expansion";
import {RecipeDescription} from "../../../core/models/recipe-description.model";
import {RecipeDescriptionDummy} from "../../../core/models/recipe-description.dummy";
import {Nutrition, Recipe} from "../../../core/models/recipe.model";
import {NutritionsDummy} from "../../../core/models/nutritions.dummy";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.scss']
})
export class RecipeViewComponent implements OnInit {

  recipe!: Recipe;
  selectedIngredients: Ingredient[] = [];
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  constructor(private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.recipe = this._route.snapshot.data["recipe"];
  }

  updateList(ingredients: Ingredient[]){
    this.selectedIngredients = ingredients;
    console.log(ingredients)
  }
}
