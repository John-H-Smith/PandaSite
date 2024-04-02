import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatListOption, MatSelectionList} from "@angular/material/list";
import { Ingredient } from 'src/app/core/models/recipe.model';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {
  @Input() public ingredients!: Ingredient[];
  @Output() public ingredientsAddToList = new EventEmitter<Ingredient[]>;

  selectedOptions: Ingredient[] = [];
  ngOnInit(): void {
    this.ingredients.forEach(x => {
      if(x.selected){
        this.selectedOptions.push(x);
      }
    })
    console.log(this.selectedOptions)
  }

  onSelectionChange(list: MatSelectionList){
   this.selectedOptions = list.selectedOptions.selected.map((item: MatListOption) => item.value);
   this.ingredientsAddToList.emit(this.selectedOptions);
  }

}
