const express =require("express");
const {createProduct,getAllProducts,getProductById,createProductList} = require("../controllers/ProductController");
const router = express.Router();
router.post("/", createProduct);
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/bulk", createProductList);
module.exports = router;    
