const express = require('express');
const router = express.Router();

// User Model
const Ustensil = require('../../models/Ustensil');

// @route  GET api/ustensils
// @desc   Get All Ustensils
// @access Public
router.get('/', (req, res) => {
  Ustensil.find()
    .sort({ date: -1 })
    .then(ustensils => res.json(ustensils))
});

// @route  POST api/ustensils
// @desc   Create A Ustensil
// @access Public
router.post('/', (req, res) => {
  const newUstensil = new Ustensil({
    name: req.body.name

  });

  newUstensil.save().then(ustensil => res.json(ustensil));
});

// @route  DELETE api/ustensils/:id
// @desc   Delete A Ustensil
// @access Public
router.delete('/:id', (req, res) => {
    Ustensil.findById(req.params.id)
      .then(ustensil => ustensil.remove().then(() => res.json({ success: true })))
      .catch(err => res.status(404).json({ success: false }));
  });

module.exports = router;
