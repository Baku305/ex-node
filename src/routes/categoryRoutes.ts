
import express, {NextFunction, Request,Response} from "express"
import { categories } from "../data/data"
import { categotyType } from "../types/types"

const categoryRoute = express.Router()

categoryRoute.get("/",(req: Request, res: Response)=>{

 res.json(categories)

})


categoryRoute.get("/:id(\\d+)",(req: Request, res: Response, next : NextFunction)=>{
 
 const reqID = Number(req.params.id)

 const idFinder = categories.find((el) => el.id === reqID) 
 
 if (idFinder) {
  res.status(404);next(`Cannot get Category ${reqID}`)
 }


 res.json(idFinder) 

}) 

categoryRoute.post("/category",(req: Request, res: Response, next : NextFunction)=>{
 
 const reqCategory : categotyType = {
  id : Number((categories.length)+1),
  name : "newCategoty"
 } 

 res.status(201).json(categories.push(reqCategory))

}) 



export default categoryRoute