const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const Post = require("../models/Post");
const mongoose = require("mongoose");

//create post
router.post("/", async (req, res) => {
  const newPost = new Post(req.body); //create post from the body values.
  try {
    const savedPost = await newPost.save(); //save post.
    res.status(200).json(savedPost); //return the saved post.
  } catch (error) {
    res.status(500).json(error);
  }
});

//update post
router.put("/:id", async (req, res) => {
  try {
    //we want to check whether the post is our's or not w/ username.
    const post = await Post.findById(req.params.id); //first find the post
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body, //set everything sent within the body.
          },
          { new: true }
        ); //we say {new:true} otherways we cannot see the post updated, we see the pre-updated version..
        res.status(200).json(updatedPost); //return updated post.
      } catch (error) {
        res.status(500).json(error); //if there is not specific error you'd like to mention, just send status/500
      }
    } else {
      res.status(401).json("You can only update your posts.");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//delete post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete(); //delete the post.
        res.status(200).json("Post has been deleted...");
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(500).json("You can only delete your posts!");
    }
  } catch (error) {
    res.status(500).json(error); //send the error.
  }
});

//get post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post); //bring others(does not involves the user password. )
  } catch (error) {
    res.status(500).json(error);
  }
});

//get all posts

router.get("/", async (req, res) => {
  //TODO:an example for a query: localhost:5000/api/posts/?user=jane
  const username = req.query.user; //it's going to look at question mark at :/?, first string that comes right after the question mark is our query.
  const catName = req.query.cat; //category value after the question mark is going to be the catName.
  try {
    let posts; //let because mutable.
    if (username) {
      posts = await Post.find({ username }); //bring all the posts with the username, {username:username} same as {username}
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName], //if categories includes the catName, then assign it posts with the catName to posts.
        },
      });
    } else {
      posts = Post.find();
    }

    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
