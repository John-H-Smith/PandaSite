import {Component, OnInit} from '@angular/core';
import {Book} from "../../../core/models/book.model";
import {BookDummys} from "../../../core/models/books.dummy";
import {Recipe} from "../../../core/models/recipe.model";
import {RecipesDummy} from "../../../core/models/recipes.dummy";
import {Tile} from "../../books/book-view/book-view.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipes-collection',
  templateUrl: './recipes-collection.component.html',
  styleUrls: ['./recipes-collection.component.scss']
})
export class RecipesCollectionComponent implements OnInit{
  recipes: Recipe[] = RecipesDummy //Dummy
  infos: Tile[] = [];
  allInfos: Tile[][] = [];
  currentState: string = '';
  constructor(private _router: Router, private _route: ActivatedRoute) {
  }
  ngOnInit() {
    //Service um Bücher vom Backend zuladen

    this.recipes.forEach((recipe: Recipe, index: number) => {
      this.infos = []
      Object.keys(recipe.infos).forEach(key => this.infos.push({title: key, info: (recipe.infos as any)[key] }));
      this.allInfos.push(this.infos);
    })
  }

  clickedViewDetail(id: number){
    this.currentState =  this._router.routerState.snapshot.url;

    const splitedState = this.currentState.split('/');

    console.log(splitedState.reverse())

    this._router.navigate(['recipes/' + splitedState[0], id])
  }
}
