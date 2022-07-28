const express = require("express");
const router  = express();
const {invite_user,remove_user} = require("../controllers/invite.js");


router.get("/invite_user",invite_user);
router.delete("/remove_user",remove_user);

module.exports = router;