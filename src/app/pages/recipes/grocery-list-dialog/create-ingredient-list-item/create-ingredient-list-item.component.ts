import { Component, EventEmitter, Input, Output } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Unit } from 'src/app/core/models/recipe.model';
import { GroceryListService } from 'src/app/core/services/groceryList.service';
import { Grocery } from '../ingredient-list-item/ingredient-list-item.component';

@Component({
  selector: 'app-create-ingredient-list-item',
  templateUrl: './create-ingredient-list-item.component.html',
  styleUrls: ['./create-ingredient-list-item.component.scss']
})
export class CreateIngredientListItemComponent {

  constructor(private _groceryService: GroceryListService) {}

  selected = '';
  @Input() units!: Unit[];
  @Output() addCreatedIngredient = new EventEmitter<Grocery>();


  formGroup = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    amount: new FormControl<string>('', [Validators.required]),
    unit: new FormControl<string>('', [Validators.required])

  })
  addIngredient(){
    if(this.formGroup.invalid) {
      console.log("invalid")
      return
    }

    const x = this.formGroup.getRawValue();

    this.addCreatedIngredient.emit(x as Grocery);
  }
}
