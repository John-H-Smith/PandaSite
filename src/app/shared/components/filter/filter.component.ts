import { Component } from '@angular/core';
import {Recipe} from "../../../core/models/recipe.model";
import {RecipesDummy} from "../../../core/models/recipes.dummy";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  toggle: boolean = false;
  recipes: Recipe[] = RecipesDummy;
  filter_Food = this._formBuilder.group({
    fleisch: false,
    fisch: false,
    vegetarisch: false,
    vegan: false,
  });

  filter_Aufwand = this._formBuilder.group({
    high: false,
    middle: false,
    low: false,
  });

  filter_Main = this._formBuilder.group({
    pasta: false,
    kartoffeln: false,
    reis: false,
    gemüse: false,
  });

  constructor(private _formBuilder: FormBuilder) {}
  toggleFilterArea(){
    this.toggle = !this.toggle;
  }
}
