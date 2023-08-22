import {Genre} from "./genre.model";

export interface BookInfo {
  title: string,
  fullTitle: string,
  verlag: string,
  author: string,
  page_count: number,
  categories: Genre[],
}
