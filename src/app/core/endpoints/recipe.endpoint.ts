import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Recipe, RecipeThin, Unit} from "../models/recipe.model";

@Injectable()
export class RecipeEndpoint {

  constructor(private _client: HttpClient){}

  public getRecipes(): Observable<RecipeThin[]> {
    return this._client.get<RecipeThin[]>('http://localhost:3000/recipe');
  }

  public getRecipe(id: string): Observable<Recipe> {
    return this._client.get<Recipe>('http://localhost:3000/recipe/' + id);
  }

  public getAllAmountUnits() {
    return this._client.get<Unit[]>('http://localhost:3000/amount-unit');
  }
}
