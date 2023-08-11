import {Routes} from "@angular/router";
import {BooksComponent} from "./books.component";
import {LibaryComponent} from "./libary/libary.component";
export const BooksRoutes: Routes = [

  //solange bookcomponetn keine genre silder
  // {
  //   path: '',
  //   redirectTo: 'library',
  //   pathMatch: 'full'
  // },
  // {
  //   path: '',
  //   component: BooksComponent,
  //   children: [
  //     {
  //       path: 'library',
  //       component: LibaryComponent
  //     },
  //   ]
  // },



  {
    path: '',
    component: BooksComponent,
    pathMatch: 'prefix',
    children: [
      {
        path: 'library',
        loadChildren: () => import('./libary/libary.module').then(x => x.LibaryModule)
      }
    ]
  },
  




];
