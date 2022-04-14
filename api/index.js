const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth"); //bring auth routes.
const userRoute = require("./routes/users");//bring users routes.
const postRoute = require("./routes/posts"); //bring post routes.

//database confuguration
dotenv.config()

app.use(express.json()); //helps you to send request bodies consisting of json. 

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    autoIndex:false,
}).then(console.log("connected")).catch((err) => {console.log(err)})

//after mongoose and before listening to port, bring routes.
app.use("/api/auth", authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts", postRoute);


//listen to the port.
app.listen("5000", () =>  { //to use app, we need to listen to the server.  
    console.log("Backend is running");
    console.log("first")
})