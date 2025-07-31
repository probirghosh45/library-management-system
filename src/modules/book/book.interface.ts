import { Model } from "mongoose";

export interface Ibooks{
 title : string,
 author : string,
 genre : "FICTION" | "NON_FICTION" | "SCIENCE" | "HISTORY" | "BIOGRAPHY" | "FANTASY"
 isbn : string
 description : string,
 copies : number,
 available ?: boolean
}

export interface BookModel extends Model<Ibooks> {
  decreaseCopies(bookId: string, quantity: number): Promise<void>;
}