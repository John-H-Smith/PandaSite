import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Recipe} from "../../core/models/recipe.model";
import {RecipesService} from "../../core/services/recipes.service";
@Injectable()
export class RecipeIdResolver implements Resolve<Recipe> {
  constructor( private _service: RecipesService) {
}
resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Recipe> | Observable<Recipe> | Recipe {
  const id =  route.params["recipeTitle"];
  return  this._service.loadRecipe(id)!
}
}

@Injectable()
export class RecipesResolver implements Resolve<Recipe[]> {
  constructor( private _service: RecipesService
  ) {
}
resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Recipe[]> | Observable<Recipe[]> | Recipe[] {
  return  this._service.loadAllRecipes()
}
}
