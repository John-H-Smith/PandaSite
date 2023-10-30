import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Book } from "../models/book.model";
import { Observable } from "rxjs";

@Injectable()
export class BookEndpoint {

    constructor(private _client: HttpClient){}

    public getBooks(): Observable<Book[]> {
        return this._client.get<Book[]>('http://localhost:3000/book');
    }
}