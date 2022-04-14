const router = require("express").Router();
const Category = require("../models/Category");


//create category.
router.post("/", async (req, res) => {
  const newCat = new Category(req.body);
  try {
    const savedCat = await newCat.save(); //save the category.
    res.status(200).json(savedCat);
  } catch (error) {
    res.status(500).json(error);
  }
});


//get categories
router.get("/", async (req, res) => {
  try {
    const cats = await Category.find(); //save the category.
    res.status(200).json(cats);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
