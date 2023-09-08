import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  constructor( public router: Router) {
  }
}
