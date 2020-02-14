const express = require('express');
const router = express.Router();

// User Model
const User = require('../../models/User');

// @route  GET api/user
// @desc   Get All Recipe
// @access Public
router.get('/', function(req, res, next) {
  User.find(function (err, users) {
    if (err) return next(err);
    res.json(users);
  });
});

// @route  GET api/users/:id
// @desc   Get one Recipe by ID
// @access Public
router.get('/:id', function(req, res, next) {
  User.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// @route  POST api/user
// @desc   Create one Recipe
// @access Private
router.post('/', function(req, res, next) {
  User.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// @route  PUT api/user/:id
// @desc   Update one Recipe
// @access Private
router.put('/:id', function(req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// @route  DELETE api/user/:id
// @desc   Create one Recipe
// @access Private
router.delete('/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
