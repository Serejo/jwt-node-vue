const express = require("express");

const router = express.Router();

const userController = require("../controllers/user.controllers");

router.post("/register", userController.registerNewUser);
router.post("/login", userController.login);
