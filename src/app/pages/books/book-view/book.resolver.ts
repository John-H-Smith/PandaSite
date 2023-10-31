import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {BooksService} from "../../../core/services/books.service";
import {Book} from "../../../core/models/book.model";
@Injectable()
export class BookIdResolver implements Resolve<Book> {
  constructor( private _service: BooksService
  ) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Book> | Observable<Book> | Book {
    const id =  route.params["bookTitle"];
    return  this._service.loadBook(id)!
  }
}

@Injectable()
export class BooksResolver implements Resolve<Book[]> {
  constructor( private _service: BooksService
  ) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Book[]> | Observable<Book[]> | Book[] {
    return  this._service.loadAllBooks()
  }
}


