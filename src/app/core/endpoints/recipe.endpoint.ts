import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Recipe} from "../models/recipe.model";

@Injectable()
export class RecipeEndpoint {

  constructor(private _client: HttpClient){}

  public getRecipes(): Observable<Recipe[]> {
    return this._client.get<Recipe[]>('http://localhost:3000/recipe');
  }
}
