const express = require("express");
const { createUser,getAllUsers,getuserByUSerId } = require("../controllers/userController");

const router = express.Router();

router.post("/", createUser);
router.get("/", getAllUsers);
router.get("/:id", getuserByUSerId);

module.exports = router;
