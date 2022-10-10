import express from "express";
import categoryRoute from "./routes/categoryRoutes";
import productsRoute from "./routes/productsRotues";

const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})

app.use("/categories",categoryRoute)
app.use("/products",productsRoute)
