import {Component, Input} from '@angular/core';
import {Nutrition, Nutritions} from "../../../core/models/recipe.model";

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.scss']
})
export class NutritionComponent {
  @Input() public nutritions?: Nutrition[];

  ngOnInit(): void {

  }
}
