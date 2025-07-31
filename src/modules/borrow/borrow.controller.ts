import { Request, Response } from "express";
import Book from "../book/book.model";
import Borrow from "./borrow.model";

const boorwBook = async (req: Request, res: Response) => {
  try {
    const { book, quantity, dueDate } = req.body;
    await Book.decreaseCopies(book, quantity);
    const borrow = await Borrow.create({ book, quantity, dueDate });

    res.status(201).json({
        success : true,
        message : "Book borrowed successfully",
        data : borrow
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: (error as Error).message,
    });
  }
};

export default boorwBook;