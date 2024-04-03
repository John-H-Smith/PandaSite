import {Component, Input, OnInit} from '@angular/core';
import {Instruction} from "../../../core/models/recipe.model";
@Component({
  selector: 'app-instruction-step',
  templateUrl: './instruction-step.component.html',
  styleUrls: ['./instruction-step.component.scss']
})
export class InstructionStepComponent {
  @Input() step!: Instruction;

}
