import {Routes} from "@angular/router";
import {BooksComponent} from "./books.component";
import {BookViewComponent} from "./book-view/book-view.component";
import {BookIdResolver} from "./book-view/book.resolver";

export const BooksRoutes: Routes = [
//nur solange es noch keine Genre Slider gibt
  {
    path: '',
    redirectTo: 'library',
    pathMatch: 'full'
  },

  {
    path: '',
    component: BooksComponent,
    pathMatch: 'prefix',
    children: [
      {
        path: 'library',
        loadChildren: () => import('./libary/libary.module').then(x => x.LibaryModule)
      },
      {
        path: 'pandashelf',
        loadChildren: () => import('./panda-shelf/panda-shelf.module').then(x => x.PandaShelfModule)
      },
      {
        path: 'library/:bookTitle',
        resolve: {book: BookIdResolver},
        component: BookViewComponent
      },
    ]
  },
];
