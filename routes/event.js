const express = require("express");
const router = express();
const {createEvent,get_all_events,update_event} = require("../controllers/event");
const {authMiddleware}=require("../middleware/auth")




router.post("/create_event/:userid",createEvent);


//get all created events using a particular user id
router.get("/get_events/:userid",authMiddleware,get_all_events);


router.put("/update_event/:eventid",update_event);




module.exports = router;