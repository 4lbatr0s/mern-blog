const router = require("express").Router(); //express router.
const User = require("../models/User");
const bcyrpt = require("bcrypt");

//register

//req: everything we send to create a new user,
//res: it can be a user, or just a warning etc..
//why async? : we do not know when it's going to complete and create a user.
router.post("/register", async (req, res) => {
  try {
    const salt = await bcyrpt.genSalt(10); //create salt
    const hashedPassword = await bcyrpt.hash(req.body.password, salt); //hash the password with salt.
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const user = await newUser.save(); // newUser is a mongoose (User) schema, save() method comes from mongoose.
    res.status(200).json(user); //if everything is successfull, then send user with 200 OK message.
  } catch (err) {
    res.status(500).json(err); //something wrong with mongodb or express server.
  }
});

//login

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    })
    !user && res.status(400).json("Wrong credentials!") //if there is no user with that name, then send error.


    const validated = await bcyrpt.compare(req.body.password, user.password)
    !validated && res.status(400).json("Wrong credentials!")


    const {password, ...others} = user._doc; //it's going to take properties except the password, we do not want to send the password to user.
    res.status(200).json(others) //send everything as the response, except the user password.
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
