import { Router } from "express"
import { createBook } from "./book.controller"


const bookRoute = Router()
bookRoute.post("/", createBook)
export default bookRoute;