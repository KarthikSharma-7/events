const db = require("../models");
const Event = db.events;
const User = db.users;

const createEvent = async (req,res) => {
    try {
        const id = req.params.userid;
        const new_event = await Event.create({
            event_name : req.body.event_name,
            event_date : req.body.event_date,
            created_by : id,
        });
        res.status(200).send(new_event);
    }
    catch(err) {
        console.log(err);
    }
};


const get_all_events = async (req,res) => {
    try {
        const events = await Event.findAll({
            where : {
                created_by : req.params.userid
            }
        });
        res.status(200).send(events);
    }
    catch(err) {
        console.log(err);
    }
};


const update_event = async (req,res) => {
    try {
        const id = req.params.eventid;
        await Event.update(req.body,{
            where : {
                id : id
            }
        });
        res.status(201).send("Event has been updated.");
    }
    catch(err){
        console.log(err);
    }
 };

//  const invite_user =async (req,res)=>{
//     try{
//         console.log("hello");
//         const id=req.body.user_id;
//         const update= await Event.update($[{user_in:id}],{
//             where : {
//                 id : req.params.eventid
//             }
//         });
//         res.status(200).send(update);
//     }
//     catch(err){
//         console.log(err);
//     }

module.exports = {createEvent,get_all_events,update_event};