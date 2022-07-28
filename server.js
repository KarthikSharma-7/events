const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models");

const user = require("./routes/user.js");
const event = require("./routes/event.js");
const auth = require("./routes/auth.js");
const invite = require("./routes/invite.js");


//data base operations
db.sequelize.sync()
.then(() => {
    console.log("Synced db.");
})
.catch((err) => {
    console.log("Failed to sync db : " + err.message);
});
db.sequelize.sync({alter : false})
.then(() => {
    console.log("Drop and re-sync db");
});
// db.sequelize.sync({force : true})
// .then(() => {
//     console.log("Drop and re-sync db");
// });


var corsOptions = {
    origin  : "http://localhost:5000"
};



app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended : true}));


app.use("/user",user);
app.use("/event",event);
app.use("/auth",auth);
app.use("/invite",invite);

app.get("/",(req,res) => {
    res.send("Welcome to the app");
});

// const PORT = process.env.PORT || 5000;
app.listen(5000,() => {
    console.log(`Server is ready at the 5000.`);
});