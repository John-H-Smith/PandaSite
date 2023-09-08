import {Genre} from "./genre.model";

export interface Recipe {
  id: number;
  title: string;
  taste?: number;
  level?: number;
  infos: RecipeData
  img: string;
  instructions: string;

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
