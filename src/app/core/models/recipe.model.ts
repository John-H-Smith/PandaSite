import {Ingredient} from "./ingredient.model";

export interface Recipe {
  id: number;
  title: string;
  score: number;
  level?: string;
  cookTime: number;
  categories: Category[];
  calories: number;
  portionSize: number;
  img: string;
  ingredients: Ingredient[];
  instructions?: Instruction[];
  nutritions: Nutritions;
}
export interface Category {
  id: number;
  category_title: string;
}

export interface Nutritions {
  calories: string;
  carbs: string;
  fiber?: string;
  sugar?: string;
  fat?: string;
  protein: string;
}

export interface Nutrition {
  name: string;
  amount: string;
}

export interface Instruction {
  step: number;
  title: string;
  content: string;
  ingredients: Ingredient[];
  utils?: Util[];
}

export interface Util {
  name: string;
}
