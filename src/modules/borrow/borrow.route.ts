import { Router } from "express";
import boorwBook from "./borrow.controller";

const borrowBookRoute = Router()
borrowBookRoute.post("/",boorwBook)
export default borrowBookRoute;