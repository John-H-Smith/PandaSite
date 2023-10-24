import {Genre} from "./genre.model";

export interface Recipe {
  id: number;
  title: string;
  taste?: number;
  level?: number;
  infos: RecipeData
  img: string;
  instructions: string;
  nutritions?: Nutritions;
}

export interface  RecipeData {
  cookTime: number;
  categories: Category[];
  calories: number;
  portionSize: number;
}

export interface Category {
  id: number;
  category_title: string;
}

export interface Nutritions {
  calories: string;
  carbs: string;
  fiber: string;
  sugar?: string;
  fat?: string;
  protein: string;
}

export interface Nutrition {
  name: string;
  amount: string;
}
