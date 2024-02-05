import {Component, OnInit, ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/core/models/ingredient.model';
import {MatAccordion} from "@angular/material/expansion";

import { Recipe} from "../../../core/models/recipe.model";
import {ActivatedRoute} from "@angular/router";
import jsPDF from "jspdf";



@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.scss']
})
export class RecipeViewComponent implements OnInit {
  recipe!: Recipe;
  selectedIngredients: Ingredient[] = [];
  ingredientsForOnePortion: number[] = [];
  ratedArrayScore = Array(0);
  unratedArrayScore = Array(5);
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  constructor(private _route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.recipe = this._route.snapshot.data["recipe"];
    this.recipe.ingredients.forEach(ingredient => {
      let oneIngrdient = +ingredient.amount / this.recipe.portionSize;
      console.log(oneIngrdient);
      this.ingredientsForOnePortion.push(oneIngrdient);
    })

    this.ratedArrayScore= new Array(this.recipe.score)
    var unrated = 5 - this.recipe.score!;
    this.unratedArrayScore = new Array(unrated);
  }
  updateList(ingredients: Ingredient[]){
    this.selectedIngredients = ingredients;
    console.log(ingredients)
  }

  portionReduce(){
    if(this.recipe.portionSize > 1){
      this.recipe.portionSize--;
      this.recipe.ingredients.map((x: Ingredient, index) => x.amount = (this.ingredientsForOnePortion[index] * this.recipe.portionSize))
      console.log(this.recipe.ingredients)
    }else {
      return;
    }
  }

  portionIncrease(){
      this.recipe.portionSize++;
      this.recipe.ingredients.map((x: Ingredient, index) => x.amount = (this.ingredientsForOnePortion[index] * this.recipe.portionSize))
      console.log(this.recipe.ingredients)
  }

  printRecipe() {
    window.print();
  }

  // downloadPDF() {
  //   let DATA = document.getElementById('htmlData');
  //
  //   html2canvas(DATA!).then(canvas => {
  //     let fileWidth = 208;
  //     let fileHeight = canvas.height * fileWidth / canvas.width;
  //
  //     const FILEURI = canvas.toDataURL('image/png')
  //     let PDF = new jsPDF();
  //     let position = 0;
  //     PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
  //
  //     PDF.save('angular-demo.pdf');
  //   });
  // }


}
