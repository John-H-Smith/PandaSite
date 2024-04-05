import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-ingredient-list-item',
  templateUrl: './create-ingredient-list-item.component.html',
  styleUrls: ['./create-ingredient-list-item.component.scss']
})
export class CreateIngredientListItemComponent {
  selected = '';
  formGroup = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    amount: new FormControl<string>('', [Validators.required]),
    unit: new FormControl<string>('', [Validators.required])

  })
  addIngredient(){
  
    if(this.formGroup.invalid) {
      console.log("invalid")
    }
  }
}
