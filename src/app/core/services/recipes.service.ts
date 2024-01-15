import {Injectable} from "@angular/core";
import {Recipe} from "../models/recipe.model";
import {RecipesDummy} from "../models/recipes.dummy";
import {Ingredient} from "../models/ingredient.model";

@Injectable()
export class RecipesService {

  recipes: Recipe[] = RecipesDummy;

  loadAllRecipes(){
    //Endpoint aufruf BookEndpoint LoadAllBooks()
    return this.recipes.slice();
  }

  loadRecipe(id: string){
    return this.recipes.find(x => x.id === +id);
  }
}
