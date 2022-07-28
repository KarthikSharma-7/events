const express = require("express");
const router = express();
const users = require("../controllers/user.js");
const { authMiddleware } = require("../middleware/auth");

//create new user
// router.post("/create_user",users.create);

//get user by id
router.get("/get_user/:userid", users.findOne);

//get all users
router.get("/get_all_users", users.findAll);

//update user by userid
router.put("/update_user/:userid", authMiddleware, users.update);

//delete user by userid
router.delete("/delete_user/:userid", authMiddleware, users.delete);

module.exports = router;
