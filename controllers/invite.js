const db = require("../models");
const Invite = db.invites;


const invite_user = async (req,res) =>{
    try {
        const create_invite = await Invite.create({
            user_id : req.body.user_id,
            event_id : req.body.event_id
        });
        res.status(201).send(create_invite);
    }
    catch(err) {
        console.log(err);
    }
};


const remove_user = async (req,res) => {
    try {
        await Invite.destroy({
            where : {
               user_id : req.body.user_id 
            }
        });
        res.status(201).send("User has been removed from the event");
    }
    catch(err) {
        console.log(err);
    }
};


module.exports = {invite_user,remove_user};