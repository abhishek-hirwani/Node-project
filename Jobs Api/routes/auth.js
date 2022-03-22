const express = require("express");
const router = express.Router();

//importing both the functions from auth controller
const { register, login } = require("../controllers/auth");

//setting up the routes
router.post("/register", register);
router.post("/login", login);

//exporting the module
module.exports = router;
