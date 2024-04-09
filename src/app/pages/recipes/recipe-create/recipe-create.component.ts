import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Category, Recipe, TimeUnit, Unit} from "../../../core/models/recipe.model";
import {UnitService} from "../../../core/services/unit.service";

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.scss']
})
export class RecipeCreateComponent implements OnInit{


 newRecipeForm!: FormGroup;
 units: Unit[] = [];

 constructor(private _unitsService: UnitService, private _fb: FormBuilder) {
 }

  ngOnInit(): void {
     this._unitsService.loadAllAmountUnits().subscribe( x => this.units = x);


    this.newRecipeForm = this._fb.group({
      name: new FormControl<string>(''),
      difficulty: new FormControl<string>(''),
      score: new FormControl(''),
      image: new FormControl(''),
      description: new FormControl(''),
      time: new FormControl(''),
      timeUnit: new FormControl(''),
      calories: new FormControl(''),
      carbs: new FormControl(''),
      fiber: new FormControl(''),
      protein: new FormControl(''),
      fat: new FormControl(''),
      sugar: new FormControl(''),
      portionSize: new FormControl(''),
      steps: new FormArray([])
    })
  }

  steps(): FormArray {
    return this.newRecipeForm.get('steps') as FormArray;
  }

  step_ingredients(index: number): FormArray {
    return this.steps()
      .at(index)
      .get('ingredients') as FormArray;
  }

  step_utils(index: number): FormArray {
    return this.steps()
      .at(index)
      .get('utils') as FormArray;
  }

  newStep(): FormGroup {
    return this._fb.group({
      step_name: '',
      ingredients: this._fb.array([]),
      utils: this._fb.array([])
    });
  }

  newIngredient(): FormGroup {
    return this._fb.group({
      ingredient_name: '',
      amount: '',
      unit: ''
    });
  }

  newUtil(): FormGroup {
    return this._fb.group({
      util_name: ''
    });
  }

  addStep() {
    this.steps().push(this.newStep());
  }

  addStepIngredient(stepIndex: number) {
    this.step_ingredients(stepIndex).push(this.newIngredient());
  }

  addStepUtil(stepIndex: number) {
    this.step_utils(stepIndex).push(this.newUtil());
  }

  removeStep(stepIndex: number) {
    this.steps().removeAt(stepIndex);
  }

  removeIngredient(stepIndex: number, ingredientIndex: number) {
    this.step_ingredients(stepIndex).removeAt(ingredientIndex);
  }

  removeUtil(stepIndex: number, utilIndex: number) {
    this.step_utils(stepIndex).removeAt(utilIndex);
  }

}
