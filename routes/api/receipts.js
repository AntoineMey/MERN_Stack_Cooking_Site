const express = require('express');
const router = express.Router();

// User Model
const Receipt = require('../../models/Receipt');

// @route  GET api/recipe
// @desc   Get All Recipe
// @access Public
router.get('/', function(req, res, next) {
  Receipt.find(function (err, receipts) {
    if (err) return next(err);
    res.json(receipts);
  });
});

// @route  GET api/receipts/:id
// @desc   Get one Recipe by ID
// @access Public
router.get('/:id', function(req, res, next) {
  Receipt.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// @route  POST api/recipe
// @desc   Create one Recipe
// @access Private
router.post('/', function(req, res, next) {
  Receipt.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// @route  PUT api/recipe/:id
// @desc   Update one Recipe
// @access Private
router.put('/:id', function(req, res, next) {
  Receipt.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// @route  DELETE api/recipe/:id
// @desc   Create one Recipe
// @access Private
router.delete('/:id', function(req, res, next) {
  Receipt.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
