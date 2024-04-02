import {Component, Input} from '@angular/core';

export interface Nutritions {
  calories?: number;
  carbs?: number;
  fiber?: number;
  protein?: number;
  fat?: number;
  sugar?: number;
}
@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.scss']
})

export class NutritionComponent {
  @Input() public nutritions!: Nutritions;
}
