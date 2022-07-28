const db = require("../models");
const  User = db.users;
const Op = db.Sequelize.Op;

// exports.create = async (req,res) => {
//     if(!req.body){
//         res.status(400).send({
//             message : "Content cannot me empty"
//         });
//         return;
//     };
//     const user = {
//         user_name : req.body.user_name,
//         email_id : req.body.email_id,
//         password : req.body.password
//     };
//     console.log(req.body);
//    await  User.create(user)
//     .then((data) => {
//         res.status(200).send(data);
//     })
//     .catch((err) => {
//         res.status(500).send({
//             message : err.message || "Some errror occured while creating the user"
//         });
//     });
// };


exports.findOne = (req,res) => {
    const id = req.params.id;
    User.findByPk(id)
    .then((data) => {
        if(data) {
            res.send(data);
        }
        else {
            res.status(404).send("User with particular id is not available");
        }
    })
    .catch((err) => {
        res.status(500).send({
            message : "Error retreiving User with id = " + id
        });
    });
};

exports.findAll = async (req,res) => {
    try{
        const data = await User.findAll();
        res.status(200).send(data);
     }
     catch(err) {
        console.log(err);
     }
};


exports.update = async(req,res) => {
    try {
        const id = req.params.userid;
        await User.update(req.body,{
            where : {id : id}
        });
        res.status(200).send("User has been updated.")
    }
    catch(err){
        console.log(err);
    }
};



exports.delete = async (req,res) => {
    try {
        const id = req.params.userid;
        await User.destroy({
            where : {
                id : id
            }
        });
        res.status(201).send("User has been deleted.");
    }
    catch(err){
        console.log(err)
    }
};

