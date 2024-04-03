import {Component, Input, OnInit} from '@angular/core';
import {RecipeThin} from "../../../core/models/recipe.model";

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {

  @Input() public recipe!: RecipeThin

  ngOnInit(): void {
  }
}
