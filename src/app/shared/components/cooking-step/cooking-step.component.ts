import {Component, Input} from '@angular/core';
import {Instruction, Recipe} from "../../../core/models/recipe.model";

@Component({
  selector: 'app-cooking-step',
  templateUrl: './cooking-step.component.html',
  styleUrls: ['./cooking-step.component.scss']
})
export class CookingStepComponent {
    @Input() step!: Instruction;
}
