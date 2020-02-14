const express = require('express');
const router = express.Router();

// User Model
const Ingredient = require('../../models/Ingredient');
// @route  GET api/ingredient
// @desc   Get All Ingredients
// @access Public
router.get('/', (req, res) => {
  Ingredient.find()
    .sort({ date: -1 })
    .then(ingredients => res.json(ingredients))
});

// @route  POST api/ingredients
// @desc   Create A Ingredient
// @access Public
router.post('/', (req, res) => {
  const newIngredient = new Ingredient({
    name: req.body.name

  });

  newIngredient.save().then(ingredient => res.json(ingredient));
});

// @route  DELETE api/ingredients/:id
// @desc   Delete A Ingredient
// @access Public
router
  .delete('/:id', (req, res) => {
    Ingredient.findById(req.params.id)
      .then(ingredient => ingredient.remove().then(() => res.json({ success: true })))
      .catch(err => res.status(404).json({ success: false }));
  });

module.exports = router;
