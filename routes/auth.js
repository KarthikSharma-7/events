const express= require("express");
const router = express();
const  {register_user,login_user} = require("../controllers/auth");


router.post("/register_user",register_user);
router.post("/login_user",login_user);


module.exports = router;