import {Component, Input} from '@angular/core';
import {Book} from "../../../core/models/book.model";
import {Recipe} from "../../../core/models/recipe.model";

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent {
  @Input() public recipe!: Recipe

}
