import {Component, HostBinding, OnInit} from '@angular/core';
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

  @HostBinding('style.--infoPaarColor') infoPaarColor = '#fff0df'
  constructor(private _router: Router, private _route: ActivatedRoute) {
  }
  ngOnInit() {

  }

  clickedViewDetail(id: number){
    this.currentState =  this._router.routerState.snapshot.url;

    const splitedState = this.currentState.split('/');

    console.log(splitedState.reverse())

    this._router.navigate(['recipes/' + splitedState[0], id])
  }
}
