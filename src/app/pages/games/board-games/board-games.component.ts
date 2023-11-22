import { Component } from '@angular/core';
import {Project} from "../../../core/models/project.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-board-games',
  templateUrl: './board-games.component.html',
  styleUrls: ['./board-games.component.scss']
})
export class BoardGamesComponent {

  constructor(private _router: Router) {
  }
  navigateToDetailPage(gameId: number){
    this._router.navigate(['games/boardgames/' + gameId])
  }
}
