import { Component } from '@angular/core';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-ingredient-list-item',
  templateUrl: './ingredient-list-item.component.html',
  styleUrls: ['./ingredient-list-item.component.scss']
})
export class IngredientListItemComponent {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'g'},
    {value: 'pizza-1', viewValue: 'kg'},
    {value: 'tacos-2', viewValue: 'ml'},
  ];

  selected = this.foods[0];

}
