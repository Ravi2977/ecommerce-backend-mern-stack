const express =require("express");
const { createAddress,getAllAddresses,getAddressesByUSerId } = require("../controllers/addressController");
const router = express.Router();

router.post("/", createAddress);
router.get("/", getAllAddresses);
router.get("/user/:userId", getAddressesByUSerId);

module.exports = router;    
