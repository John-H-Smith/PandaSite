import {Injectable} from "@angular/core";
import {Book} from "../models/book.model";
import {BookDummys} from "../models/book.dummy";
import { BookEndpoint } from "../endpoints/book.endpoint";

@Injectable()
export class BooksService {

  books: Book[] = BookDummys;

  constructor(private _endpoint: BookEndpoint){

  }

  loadAllBooks(){
    //Endpoint aufruf BookEndpoint LoadAllBooks()
    //return this.books.slice();
    return this._endpoint.getBooks();
  }

  loadBook(id: string){
    const book = this.books.find(x => x.id === +id)

    return book;
  }



}
