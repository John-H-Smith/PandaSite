import {Component, ContentChild, EventEmitter, Input, Output, TemplateRef} from '@angular/core';
import {CustomTableColumn} from "./table.model";
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() templateRef!: TemplateRef<any>;
  @Input() data: any[] = [];
  @Input() public tableOptions!: CustomTableColumn[];

  public displayedColumnObjects!: CustomTableColumn[];
  public columnsToDisplay!: string[];
  ngOnInit() {
    console.log(this.tableOptions);
    this.columnsToDisplay = this.getDisplayedColumnNames(this.tableOptions);

    this.displayedColumnObjects = this.getDisplayedColumnObjects(
      this.tableOptions
    );
  }

  private getDisplayedColumnObjects(
    tableOpts: CustomTableColumn[]
  ): CustomTableColumn[] {
    const displayedColumnObjects: CustomTableColumn[] = tableOpts
      // just for config test
      .filter((column: CustomTableColumn) => !column.hide);

    return displayedColumnObjects;
  }

  private getDisplayedColumnNames(tableOpts: CustomTableColumn[]): string[] {
    const displayedColumns: string[] = tableOpts
      // just for config test
      .filter((column: CustomTableColumn) => !column.hide)
      .map((column: CustomTableColumn) => column.id);

    return displayedColumns;
  }
}
