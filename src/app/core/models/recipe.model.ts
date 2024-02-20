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
  imagePath: string;
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

// export interface Recipe {
//   id: number
//   title: string
//   score: number
//   time: number
//   imagePath: string
//   calories: number
//   carbs: number
//   fiber: number
//   protein: number
//   fat: number
//   sugar: number
//   portionSize: number
//   instructions: Instruction[]
//   categories: Category[]
//   timeUnit: TimeUnit
//   difficulty: Difficulty
// }
//
// export interface Instruction {
//   id: number
//   step: number
//   content: string
//   title: string
//   instructionIngredients: InstructionIngredient[]
// }
//
// export interface InstructionIngredient {
//   instruction: number
//   ingredient: number
//   amount: number
// }
//
// export interface Category {
//   id: number
//   name: string
// }
//
// export interface TimeUnit {
//   id: string
//   name: string
// }
//
// export interface Difficulty {
//   id: number
//   name: string
// }
