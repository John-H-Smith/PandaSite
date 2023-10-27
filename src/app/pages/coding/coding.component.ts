import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-coding',
  templateUrl: './coding.component.html',
  styleUrls: ['./coding.component.scss']
})
export class CodingComponent {
  constructor( public router: Router) {
  }
}
