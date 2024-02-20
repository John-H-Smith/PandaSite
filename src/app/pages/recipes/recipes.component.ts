import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Recipe} from "../../core/models/recipe.model";
import {RecipesDummy} from "../../core/models/recipes.dummy";
import {RecipesModule} from "./recipes.module";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit{
  constructor( public router: Router) {
  }

  ngOnInit(): void {
  }
}
