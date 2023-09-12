import {Recipe} from "./recipe.model";

export const RecipesDummy: Recipe[] = [
  {id: 0, title: 'Nudelauflauf', instructions: '', infos: {portionSize: 2, calories: 500, cookTime: 30, categories: [{id: 0, category_title: 'd'}]}, level: 3, taste: 3, img: 'assets/img/recipes/nudelauflauf.jpg'},
  {id: 1, title: 'Pizza',instructions: '', infos: {portionSize: 4, calories: 500, cookTime: 30, categories: [{id: 0, category_title: 'd'}]}, level: 3, taste: 3, img: 'assets/img/recipes/nudelauflauf.jpg'},
  {id: 2, title: 'd', instructions: '', infos: {portionSize: 3, calories: 600, cookTime: 30, categories: [{id: 0, category_title: 'd'}]}, level: 3, taste: 3, img: 'assets/img/recipes/pizza.jpg'}

]
