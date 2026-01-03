const express =require("express");
const {createCartItem,getCartItemsByUserId} = require("../controllers/cartItemController");
const router = express.Router();
router.post("/", createCartItem);
router.get("/user/:userId", getCartItemsByUserId);
module.exports = router;
    