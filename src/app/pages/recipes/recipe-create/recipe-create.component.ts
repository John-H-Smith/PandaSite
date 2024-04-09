import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Category, Recipe, TimeUnit} from "../../../core/models/recipe.model";

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.scss']
})
export class RecipeCreateComponent implements OnInit{


 newRecipeForm!: FormGroup;

  ngOnInit(): void {
    this.newRecipeForm = new FormGroup({
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
      steps: new FormArray([
        new FormGroup({
          name: new FormControl<string>(''),
          ingredients: new FormArray([
            new FormGroup({
              name: new FormControl<string>(''),
              amount: new FormControl<string>(''),
              unit: new FormControl<string>(''),
            })
          ]),
          utils: new FormArray([
            new FormGroup({
              name: new FormControl<string>(''),
            })
          ])
        })
      ])
    })
  }

  get steps() { // a getter!
    return this.newRecipeForm.get('steps') as FormArray;
  }
  get ingredients(): FormArray {
    return this.steps.at(0).get('ingredients') as FormArray;
  }
  get utils(): FormArray {
    return this.steps.at(0).get('utils') as FormArray;
  }

  getControl(index: number): any {
    return this.ingredients.at(index);
  }
  addStep() {
    this.steps.push(
      new FormGroup({
        name: new FormControl<string>(''),
        ingredients: new FormArray([
          new FormGroup({
            name: new FormControl<string>(''),
            amount: new FormControl<string>(''),
            unit: new FormControl<string>(''),
          })
        ]),
        utils: new FormArray([
          new FormGroup({
            name: new FormControl<string>(''),
          })
        ])
      }))
    ;
  }

  addIngredient(){
    this.ingredients.push(
      new FormGroup({
        name: new FormControl<string>(''),
        amount: new FormControl<string>(''),
        unit: new FormControl<string>(''),
      })
    )
  }

  addUtil(){
    this.utils.push(
      new FormGroup({
        name: new FormControl<string>(''),
      })
    )
  }
}
