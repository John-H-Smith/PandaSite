import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../../core/models/book.model";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-container-book',
  templateUrl: './container-book.component.html',
  styleUrls: ['./container-book.component.scss']
})
export class ContainerBookComponent implements OnInit{
  shelf1:BookSpine[] = [{title: 'dddd', color: '', id: 0}, {title: 'ffefe', color: '', id: 0}];
  shelf2:BookSpine[] = [{title: 'auto', color: '', id: 0}, {title: 'rr', color: '', id: 0}];
  shelf3:BookSpine[] = [];


  constructor() {
  }
  ngOnInit() {

  }

  drop(event: CdkDragDrop<BookSpine[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}

export interface BookSpine {
  title: string,
  id: number,
  color: string
}
