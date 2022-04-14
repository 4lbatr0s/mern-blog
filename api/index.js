const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth"); //bring auth routes.
const userRoute = require("./routes/users"); //bring users routes.
const postRoute = require("./routes/posts"); //bring post routes.
const categoryRoute = require("./routes/categories"); //bring category routes.
const multer = require("multer");
//database confuguration
dotenv.config();

app.use(express.json()); //helps you to send request bodies consisting of json.

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected"))
  .catch((err) => {
    console.log(err);
  });

  


//FILE UPLOAD.

//it's going to take the file that we sent and put it into the images folder in api, and filename will be the name we'd send within the body.
const storage = multer.diskStorage({
    destination:(req,file,cb) => { //callbacks:cb will help us if there are any error etc...
        cb(null, "images") //our destination.
    },
    filename:(req,file,cb) => {
        cb(null, "hello.jpeg"); //filename will be the name value that we send within the body.
    }
})

const upload = multer({storage:storage}); //key value will be "file" 
app.post("/api/upload", upload.single("file"), (req,res) => {
    res.status(200).json("File has been uploaded")
})


//after mongoose and before listening to port, bring routes.
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

//listen to the port.
app.listen("5000", () => {
  //to use app, we need to listen to the server.
  console.log("Backend is running");
  console.log("first");
});
