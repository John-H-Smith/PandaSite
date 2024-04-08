import {Injectable} from "@angular/core";
import {Ingredient} from "../models/recipe.model";
import {Grocery} from "src/app/pages/recipes/grocery-list-dialog/ingredient-list-item/ingredient-list-item.component";

@Injectable()
export class GroceryListService {  

  index: number = 0;
  updateGroceryListFromRecipe(ingredientsAddToList: Ingredient[]){
    const localIngredients = localStorage.getItem("groceryList_ingredients");

    let grocerys: Grocery[] = [];

    if(localIngredients === null){
      //type umändern: Ingredient to Grocery
      grocerys = this.castType(ingredientsAddToList, grocerys, 0);
      //storage speichern
      localStorage.setItem("groceryList_ingredients",  JSON.stringify(grocerys))
    }else{
      //type umändern: Ingredient to Grocery
      grocerys = this.castType(ingredientsAddToList, grocerys, this.index);
      const parsedIngredients = JSON.parse(localIngredients) as Grocery[];

      //doppelte Grocerys zusammen addieren
      const newGroceryListIngredients= this.combineSameGrocery(parsedIngredients, grocerys);

      localStorage.setItem("groceryList_ingredients", JSON.stringify(newGroceryListIngredients))
    }
  }

  addGrocery(groceryToAdd: Grocery): Grocery[] {
    let storage = this.getIngredientsForGroceryList();

    if(storage.length === 0){
      this.index = 0;
    }
    const same = storage.find(i => i.name === groceryToAdd.name && i.unit === groceryToAdd.unit);
    if(same !== undefined){
      const newAmount = +groceryToAdd.amount + +same.amount;
      const index = storage.findIndex(x => x.id === same.id);
      storage[index].amount = newAmount.toString();
    }else {
      groceryToAdd.id = this.getIndexNext();
      storage.push(groceryToAdd);
    }
    localStorage.setItem("groceryList_ingredients", JSON.stringify(storage))

    return storage;
  }

  getIndexNext(){
    this.index = this.index + 1;

    return this.index;
  }

  getIngredientsForGroceryList(): Grocery[] {
    const localIngredients = localStorage.getItem("groceryList_ingredients");
    if(localIngredients !== null){
      return JSON.parse(localIngredients) as Grocery[];
    }
    return []
    
  }

  castType(ingredientsAddToList: Ingredient[], grocerys: Grocery[], index: number){
    this.index  = index;
    ingredientsAddToList.forEach(ingredient => {
      this.index = this.index + 1;
      let x :Grocery = {
        id: this.index,
        name: ingredient.singleName,
        unit: ingredient.unit.id,
        amount: ingredient.amount.toString()
      }
      grocerys.push(x)
    });
    return grocerys
  }

  deleteGrocery(id: number){
    let storage = this.getIngredientsForGroceryList()
    storage = storage.filter(x => x.id !== id);
    localStorage.setItem("groceryList_ingredients", JSON.stringify(storage))
    return storage;
  }

  combineSameGrocery(storage: Grocery[], newGrocerys: Grocery[]){
    storage.forEach((x: Grocery, index: number) => {
      const same = newGrocerys.find(i => i.name === x.name && i.unit === x.unit);
      if(same !== undefined){
        const newAmount = +x.amount + +same.amount;
        storage[index].amount = newAmount.toString();
        const sameIndex = newGrocerys.findIndex(i => i.name === x.name && i.unit === x.unit);
        newGrocerys.splice(sameIndex, 1);
      }
    })

    return [...newGrocerys, ...storage];
  }
}
