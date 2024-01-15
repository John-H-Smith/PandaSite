
export interface Recipe {
  id: number;
  title: string;
  score?: number;
  level?: string;
  cookTime: number;
  categories: Category[];
  calories: number;
  portionSize: number;  
  img: string;
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
}