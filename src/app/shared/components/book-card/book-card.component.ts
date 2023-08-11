import {Component, Input} from '@angular/core';
import {myCustomTooltipDefaults} from "../tooltip/tooltip.component";
import {MAT_TOOLTIP_DEFAULT_OPTIONS} from "@angular/material/tooltip";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
  providers: [{provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults}],
})
export class BookCardComponent {
  @Input() public title?: string;
  @Input() public author?: string;
  @Input() public short_description?: string;

  @Input() public url?: string;
}
