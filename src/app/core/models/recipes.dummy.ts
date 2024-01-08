import {Recipe} from "./recipe.model";

export const RecipesDummy: Recipe[] = [
  {id: 0, title: 'Nudelauflauf', instructions: '', portionSize: 2, calories: 500, cookTime: 30, categories: [{id: 0, category_title: 'd'}], level: 'schwer', score: 3, img: 'assets/img/recipes/nudelauflauf.jpg'},
  {id: 1, title: 'Nudelauflauf', instructions: '', portionSize: 2, calories: 500, cookTime: 30, categories: [{id: 0, category_title: 'd'}], level: 'einfach', score: 3, img: 'assets/img/recipes/nudelauflauf.jpg'},
  {id: 2, title: 'd', instructions: '', portionSize: 2, calories: 500, cookTime: 30, categories: [{id: 0, category_title: 'd'}], level: 'normal', score: 3, img: 'assets/img/recipes/pizza.jpg'}

]
