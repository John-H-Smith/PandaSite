import { Injectable } from "@angular/core";
import { RecipeEndpoint } from "../endpoints/recipe.endpoint";

@Injectable()
export class UnitService {

    constructor(private _endpoint: RecipeEndpoint) {
    }

    loadAllAmountUnits(){
        return this._endpoint.getAllAmountUnits();
    }
}