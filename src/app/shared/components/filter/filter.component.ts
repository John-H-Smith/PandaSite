import {Component, HostListener, OnInit} from '@angular/core';
import {Recipe} from "../../../core/models/recipe.model";
import {RecipesDummy} from "../../../core/models/recipes.dummy";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit{
  toggle: boolean = false;
  mobile: boolean = false;
  recipes: Recipe[] = RecipesDummy;
  filter_Food = this._formBuilder.group({
    fleisch: false,
    fisch: false,
    vegetarisch: false,
    vegan: false,
  });

  filter_Aufwand = this._formBuilder.group({
    high: false,
    middle: false,
    low: false,
  });

  filter_Main = this._formBuilder.group({
    pasta: false,
    kartoffeln: false,
    reis: false,
    gemüse: false,
  });

  constructor(private _formBuilder: FormBuilder) {}
  ngOnInit(): void {

    if(window.innerWidth >= 1000){
      this.mobile = false;
      this.toggle = false
    }else {
      this.mobile = true;
      this.toggle = false

    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const currentWidth = event.target.innerWidth;
    if(currentWidth >= 1000){
      this.mobile = false;
      this.toggle = false
    }else {
      this.mobile = true;
    }
  }

  toggleFilterArea(){
    this.toggle = !this.toggle;
  }

  resetFilter(){
    this.toggle = false;
    this.filter_Main.reset();
    this.filter_Aufwand.reset();
    this.filter_Food.reset();
  }

  saveFilter() {
    this.toggle = false;
  }


}

