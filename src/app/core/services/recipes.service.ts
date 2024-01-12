import {Injectable} from "@angular/core";
import {Recipe} from "../models/recipe.model";
import {RecipesDummy} from "../models/recipes.dummy";

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
