import {Component, Input} from '@angular/core';
import {Category} from "../../../core/models/recipe.model";

@Component({
  selector: 'app-custom-tag',
  templateUrl: './custom-tag.component.html',
  styleUrls: ['./custom-tag.component.scss']
})
export class CustomTagComponent {
  @Input() tags!: Category[];
}
