
const Product = require("../models/Product")

const createProduct= async(req,res)=>{   //set product api
    const body = req.body
    console.log("userInfo",req.userInfo)
    // console.log(body)
    try{
        const product =  new Product(body)
        const reasult = await  product.save()
        res.status(201)
        .json({message:"created", reasult})
    }catch(err){
        res.status(500)
        .json({message: "Internal Server Error"})
    }
}

const getProducts = async(req,res)=>{  //get all product api
    try{
        const results =  await Product.find({})
        res.status(200)
        .json({message: "Success", data:results})
    }catch{
        res.status(500)
        .json({message: "Internal Server Error"})
    }
}


const getProductById = async(req,res)=>{  //get a single product api 
    try{
        const id = req.params.id; //get the id
        const result = await Product.findById(id)
        res.status(200)
        .json({message: "Success", data:result})
    }catch{
        res.status(500)
        .json({message: "Internal Server Error"})
    }
}

const updateProductById = async(req,res)=>{  //get a single product api 
    try{
        const id = req.params.id; //get the id
        const body = req.body
        const updateDoc = {$set:{...body}}
        updateDoc.updatedAt=Date.now()
        await Product.findByIdAndUpdate(id,updateDoc)
        res.status(200)
        .json({message: "Updated"})
    }catch{
        res.status(500)
        .json({message: "Internal Server Error"})
    }
}

const deleteProductById = async(req,res)=>{  //get a single product api 
    try{
        const id = req.params.id; //get the id
        await Product.findByIdAndDelete(id)
        res.status(200)
        .json({message: "deleted"})
    }catch{
        res.status(500)
        .json({message: "Internal Server Error"})
    }
}


module.exports={
    createProduct,
    getProducts,
    getProductById,
    updateProductById,
    deleteProductById
}