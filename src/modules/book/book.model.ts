import { Schema, model } from "mongoose";
import { BookModel, Ibooks } from "./book.interface";

// Step 1 : Schema Define
const booksSchema = new Schema<Ibooks>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 100,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    genre: {
      type: String,
      required: true,
      enum: [
        "FICTION",
        "NON_FICTION",
        "SCIENCE",
        "HISTORY",
        "BIOGRAPHY",
        "FANTASY",
      ],
    },
    isbn: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      default: "",
    },
    copies: {
      type: Number,
      required: true,
      min: [0, "Copies must be a non-negative number"],
    },
    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

booksSchema.statics.decreaseCopies = async function (
  bookId: string,
  quantity: number
) {
  const book = await this.findById(bookId);
  if (!book || book.copies < quantity) {
    throw new Error("Not Enough Copies available");
  }
  book.copies -= quantity;

  if (book.copies === 0) {
    book.available = false;
  }
  await book.save()
};

// Step 2 : Model Create and Export
const Book = model<Ibooks,BookModel>("Book", booksSchema);
export default Book;
