import {Component, OnInit} from '@angular/core';
import {Book} from "../../../core/models/book.model";
import {BookDummys} from "../../../core/models/books.dummy";
import {Recipe} from "../../../core/models/recipe.model";
import {RecipesDummy} from "../../../core/models/recipes.dummy";
import {Tile} from "../../books/book-view/book-view.component";

@Component({
  selector: 'app-recipes-collection',
  templateUrl: './recipes-collection.component.html',
  styleUrls: ['./recipes-collection.component.scss']
})
export class RecipesCollectionComponent implements OnInit{
  recipes: Recipe[] = RecipesDummy //Dummy
  infos: Tile[] = [];
  allInfos: Tile[][] = [];
  ngOnInit() {
    //Service um Bücher vom Backend zuladen

    this.recipes.forEach((recipe: Recipe, index: number) => {
      this.infos = []
      Object.keys(recipe.infos).forEach(key => this.infos.push({title: key, info: (recipe.infos as any)[key] }));
      this.allInfos.push(this.infos);
    })

  }
}
