import {Injectable} from "@angular/core";
import {RecipeEndpoint} from "../endpoints/recipe.endpoint";
import { Ingredient } from "../models/recipe.model";

@Injectable()
export class RecipesService {

  constructor(private _endpoint: RecipeEndpoint) {
  }
  
  loadAllRecipes(){
    return this._endpoint.getRecipes();
  }

  loadRecipe(id: string){
    return this._endpoint.getRecipe(id);
  }
}
