import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../../core/models/book.model";
import {Recipe} from "../../../core/models/recipe.model";

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {
 
  @Input() public recipe!: Recipe
  ratedArrayTaste = Array(0);
  unratedArrayTaste = Array(5);
  ratedArrayLevel = Array(0);
  unratedArrayLevel = Array(5);

  ngOnInit(): void {
    if(this.recipe.taste){
      this.ratedArrayTaste= new Array(this.recipe.taste)
      var unrated = 5 - this.recipe.taste;
      this.unratedArrayTaste = new Array(unrated);
    }
    if(this.recipe.level){
      this.ratedArrayLevel= new Array(this.recipe.taste)
      var unrated = 5 - this.recipe.level;
      this.unratedArrayLevel = new Array(unrated);
    }

  }
}
