import {TemplateRef} from "@angular/core";

export interface CustomTableColumn {
  title: string;
  id: string;
  cellTemplate?: TemplateRef<any>;
  hide?: boolean;
}

