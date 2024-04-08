export interface TimeUnit {
  id: string;
  name: string;
}

export interface Category {
  name: string;
}

export interface Utility {
  name: string;
}

export interface Unit {
  id: string;
  name: string;
}

export interface Ingredient {
  singleName: string;
  pluralName: string;
  amount: number;
  selected?: boolean;
  unit: Unit;
}

export interface Instruction {
  step: number;
  content: string;
  title: string;
  utils: Utility[];
  ingredients: Ingredient[];
}

export interface Recipe {
  id: number;
  title: string;
  score?: number;
  description: string;
  time: number;
  timeUnit: TimeUnit;
  image?: string;
  calories?: number;
  carbs?: number;
  fiber?: number;
  protein?: number;
  fat?: number;
  sugar?: number;
  portionSize: number;
  difficulty?: string;
  categories: Category[];
  instructions: Instruction[];
  ingredients: Ingredient[];
}

export interface RecipeThin{
  id:number;
  title: string;
  score?: number;
  portionSize: number;
  difficulty?: string;
  description: string;
  time: number;
  timeUnit: TimeUnit;
  image?: string;
  calories?: number;
  protein?: number;
  categories: Category[];
}
