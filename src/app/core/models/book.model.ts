import {Genre} from "./genre.model";
import {BookInfo} from "./book-info.model";

export interface Book {
  id: number,
  img?: string,
  description?: string,
  quote?: string,
  title: string,
  fullTitle: string,
  verlag: string,
  author: string,
  page_count: string,
  categories: Genre[],
}

export interface Book2 {
  id: number
  title: string
  description: string
  quote: string
  fullTitle: string
  genres: Genre2[]
  author: Author
  publisher: Publisher
}

export interface Genre2 {
  id: number
  name: string
}

export interface Author {
  id: number
  prename: string
  surname: string
}

export interface Publisher {
  id: number
  name: string
}
