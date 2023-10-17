import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-cooking-step',
  templateUrl: './cooking-step.component.html',
  styleUrls: ['./cooking-step.component.scss']
})
export class CookingStepComponent {
    @Input() title!: string;
}
