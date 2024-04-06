import { Injectable } from "@angular/core";
import { Ingredient } from "../models/recipe.model";
import { Grocery } from "src/app/pages/recipes/grocery-list-dialog/ingredient-list-item/ingredient-list-item.component";

@Injectable()
export class GroceryListService {
updateGroceryList(ingredientsAddToList: Ingredient[]){
    const localIngredients = localStorage.getItem("groceryList_ingredients");

    let grocerys: Grocery[] = [];

    //type umändern: Ingredient to Grocery
    ingredientsAddToList.forEach(ingredient => {
      let x :Grocery = {
        name: ingredient.singleName,
        unit: ingredient.unit.id,
        amount: ingredient.amount.toString()
      }

      grocerys.push(x)
    });

    if(localIngredients === null){
      localStorage.setItem("groceryList_ingredients",  JSON.stringify(grocerys))
    }else{
      const parsedIngredients = JSON.parse(localIngredients) as Grocery[];

      //doppelte Grocerys zusammen addieren
      parsedIngredients.forEach((x: Grocery, index: number) => {
        const same = grocerys.find(i => i.name === x.name && i.unit === x.unit);
        if(same !== undefined){
          const newAmount = +x.amount + +same.amount;
          parsedIngredients[index].amount = newAmount.toString();
          const sameIndex = grocerys.findIndex(i => i.name === x.name && i.unit === x.unit);
          grocerys.splice(sameIndex, 1);
        }
      })

      const newGroceryListIngredients = [...grocerys, ...parsedIngredients];
      localStorage.setItem("groceryList_ingredients", JSON.stringify(newGroceryListIngredients))
    }
  }

  getIngredientsForGroceryList(): Grocery[] {
    const localIngredients = localStorage.getItem("groceryList_ingredients");
    if(localIngredients !== null){
      return JSON.parse(localIngredients) as Grocery[];
    }
    return []
  }
}