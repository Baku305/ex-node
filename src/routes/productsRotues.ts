import express, {NextFunction, Request,Response} from "express"
import { products } from "../data/data"
import { categotyType, productType } from "../types/types"

const productsRoute = express.Router()

productsRoute.get("/",(req: Request, res: Response)=>{

 res.json(products)

})


productsRoute.get("/:id(\\d+)",(req: Request, res: Response, next : NextFunction)=>{
 
 const reqID = Number(req.params.id)

 const idFinder = products.find((el) => el.id === reqID) 

 if (!idFinder) {
  res.status(404);next(`Cannot get product ${reqID}`)
 }

 res.json(idFinder)  

}) 

productsRoute.post("/product",(req: Request, res: Response, next : NextFunction)=>{
 
 const reqProduct : productType = {
  id : Number((products.length)+1),
  name : "newProduct",
  price : 2,
  img : "http://test.test",
  category_id: 1
 } 

 res.status(201).json(products.push(reqProduct))

}) 



export default productsRoute