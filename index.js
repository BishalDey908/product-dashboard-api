const express = require("express")
const app = express()
require("dotenv").config() //help us to dead env data which data is coming from another page
require("./db") //connect with db.js and run both file at the same time

const PORT =process.env.PORT || 8080
// const productRoutes = require("./routes/productRoutes")

const productRoutes=require("./routes/productRoutes")
const userRouters = require("./routes/userRoutes")

app.use(express.json())//middleware for parsing json

app.get("/",(req,res)=>{
    res.send("hello world")
})

//for products
app.use("/products",productRoutes) //middlewear

//for user
app.use("/users",userRouters)




app.listen("8080",()=>{
    console.log("Server is running on port "+PORT);
})