import {Genre} from "./genre.model";
import {BookInfo} from "./book-info.model";

export interface Book {
  id: number,
  img?: string,
  description?: string,
  quote?: string,
  infos: BookInfo,
}
