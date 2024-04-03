import {Component, HostBinding, OnInit} from '@angular/core';
import {Tile} from "../../books/book-view/book-view.component";
import {ActivatedRoute, Router} from "@angular/router";
import {RecipeThin} from "../../../core/models/recipe.model";

@Component({
  selector: 'app-recipes-collection',
  templateUrl: './recipes-collection.component.html',
  styleUrls: ['./recipes-collection.component.scss']
})
export class RecipesCollectionComponent implements OnInit{
  recipes!: RecipeThin[];
  infos: Tile[] = [];
  allInfos: Tile[][] = [];
  currentState: string = '';

  @HostBinding('style.--infoPaarColor') infoPaarColor = '#fff0df'
  constructor(private _router: Router, private _route: ActivatedRoute) {
  }
  ngOnInit() {
    this.recipes = this._route.snapshot.data["recipes"];
  }

  clickedViewDetail(id: number){
    // this.currentState =  this._router.routerState.snapshot.url;
    //
    // const splitedState = this.currentState.split('/');
    //
    // console.log(splitedState.reverse())
    //
    // this._router.navigate(['recipes/' + splitedState[0], id])

    this._router.navigate(['recipes/collection/' + id])
  }
}
