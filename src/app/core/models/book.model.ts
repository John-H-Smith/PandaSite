import {Genre} from "./genre.model";

export interface Book {
  id: number,
  title: string,
  author: string,
  page_count: number,
  categories: Genre[],
  img?: string,
  description?: string,
  fullTitle?: string,

}
