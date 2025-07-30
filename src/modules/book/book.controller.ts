import { Request, Response } from "express";
import Book from "./book.model";
import { any } from "joi";
import { SortOrder } from "mongoose";

//create books
const createBook = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const book = new Book(payload);
    const bookData = await book.save();

    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: bookData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create book",
      error: (error as Error).message,
    });
  }
};

// get all users
const getAllBooks = async (req: Request, res: Response) => {
  try {
    // filter books by genre
    const query: Record<string, any> = {};
    const genreQuery = req.query.filter;
    if (genreQuery) {
      query.genre = genreQuery;
    }

    // sort books
    const sortBy = (req.query.sortBy as string) || "createdAt"; // default value = 'createdAt'
    const sortOrder = req.query.sort === "asc" ? 1 : -1; // default order = 'descending'
    const sortOptions: Record<string, SortOrder> = { [sortBy]: sortOrder };

    // limit books
    const limit = parseInt(req.query.limit as string) || 10;

    const books = await Book.find(query).sort(sortOptions).limit(limit);
    res.status(200).json({
      success: true,
      message: "All books fetched successfully",
      data: books,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch books",
      error: (error as Error).message,
    });
  }
};

//Get Book by ID

const getBookById = async (req: Request, res: Response) => {
  try {
    const { bookId } = req.params;
    console.log("id",bookId)
    const book = await Book.findById(bookId);
    if (book) {
      res.status(201).json({
        success: true,
        message: "Book retrieved successfully",
        data: book,
      });
    } else {
        res.status(401).json({
            success : false ,
            message : "Book not found",            
        })
        return ;
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch book",
      error: (error as Error).message,
    });
  }
};

export { createBook, getAllBooks,getBookById };
