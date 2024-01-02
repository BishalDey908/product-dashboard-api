const ensureAuthenticated = require("../auth")
const { createProduct, getProducts, getProductById, updateProductById, deleteProductById } = require("../controllers/productController")

const router = require("express").Router()

router.post("/",ensureAuthenticated, createProduct) //secure
router.get("/",getProducts)
router.get("/:id",getProductById)
router.put("/:id",ensureAuthenticated, updateProductById) //secure
router.delete("/:id",ensureAuthenticated, deleteProductById) //secure

module.exports = router