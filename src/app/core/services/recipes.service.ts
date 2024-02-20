import {Injectable} from "@angular/core";
import {Recipe} from "../models/recipe.model";
import {RecipesDummy} from "../models/recipes.dummy";
import {Ingredient} from "../models/ingredient.model";
import {RecipeEndpoint} from "../endpoints/recipe.endpoint";

@Injectable()
export class RecipesService {

  recipes: Recipe[] = RecipesDummy;
  constructor(private _endpoint: RecipeEndpoint) {
  }
  loadAllRecipes(){
    //Endpoint aufruf BookEndpoint LoadAllBooks()
    return this._endpoint.getRecipes();
    // return this.recipes.slice();
  }

  loadRecipe(id: string){
    return this.recipes.find(x => x.id === +id);
  }
}
