import { Request, Response } from "express";
import Book from "./book.model";

const createBook = async (req : Request , res : Response) =>{

    try {
        const payload = req.body;
        const book = new Book(payload)
        const bookData = await book.save()

        res.status(201).json({
            success : true,
            message : "Book created successfully",
            data : bookData
        })
    } catch (error) {
        res.status(500).json({
            success : false ,
            message : "Failed to create book",
            error : (error as Error).message
        })
    }
}

export {createBook}