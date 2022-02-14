// wiki.js - Wiki route module.

var express = require('express');
var router = express.Router();

// Home page route.
router.get('/', function (req, res) {
  res.send('Wiki home page');
})

// About page route.
router.get('/about', function (req, res) {
  res.send('About this wiki');

  console.log("hello world")
})

// https://apple-app-site-association.ismayildev.repl.co/.well-known/apple-app-site-association

module.exports = router;
