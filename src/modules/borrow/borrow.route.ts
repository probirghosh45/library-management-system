import { Router } from "express";
import { boorwBook, getBorrowedBooksSummary } from "./borrow.controller";


const borrowBookRoute = Router()
borrowBookRoute.post("/",boorwBook)
borrowBookRoute.get("/",getBorrowedBooksSummary)
export default borrowBookRoute;