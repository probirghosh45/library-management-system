import { Router } from "express"
import { createBook, getAllBooks, getBookById } from "./book.controller"


const bookRoute = Router()
bookRoute.post("/", createBook)
bookRoute.get("/", getAllBooks)
bookRoute.get("/:bookId", getBookById)
export default bookRoute;