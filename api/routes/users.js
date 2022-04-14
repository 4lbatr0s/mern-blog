const router = require("express").Router()
const User = require("../models/User")
const bcrypt = require("bcrypt")
const Post = require("../models/Post")

//update
router.put("/:id", async (req, res) => {
    if(req.body.userId === req.params.id){ // /:id,-> id we sent here is the params.id
        if(req.body.password){ //if we're sending any password within the body.
            const salt = await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hash(req.body.password, salt)
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set:req.body //update everything we sent, if we just sent name and password, then update these two.
            }, {new:true})
            res.status(200).json(updatedUser)
        } catch (error) {
            req.status(500).json(error)
        }
    } else {
        res.status(401).json("You can only update your account!")
    }
})


//delete

router.delete("/:id", async (req, res) => {
    if(req.body.userId === req.params.id){ // /:id,-> id we sent here is the params.id
       
    try {
        const user = await User.findById(req.params.id) //we will find the user's posts and delete them.    
        try {
            await Post.deleteMany({username:user.username}) //delete posts of this user.
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been deleted")
        } catch (error) {
            req.status(500).json(error)
        }
    } catch (error){
        res.status(404).json("User not found")
    }
 }
   else {
        res.status(401).json("You can only delete your account!")
    }
})



//get user
router.get(":/id", async(req, res) => {
    try {
        const user = await  User.findById(req.params.id)
        const {password, ...others} = user._doc //we do not want to bring the user's password.
        res.status(200).json(others) //bring others(does not involves the user password. )
    } catch (error) {
        res.status(500).json(error)        
    }
})


module.exports = router;