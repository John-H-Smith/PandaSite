import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {GroceryListDialogComponent} from "../recipes/grocery-list-dialog/grocery-list-dialog.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor( public router: Router, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    }

  openDialog(): void {
    this.dialog.open(GroceryListDialogComponent, {
      width: 'fit-content',
    });
  }


}
