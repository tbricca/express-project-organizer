var express = require('express');
var db = require('../models');
var router = express.Router();


// GET /projects/new - display form for creating a new project
router.get('/', function(req, res) {
  db.category.findAll()
  .then(function(category) {
    res.render('categories', { category: category });
  })
  .catch(function(error) {
    res.status(400).render('main/404');
  });
});

// GET /projects/:id - display a specific project
router.get('/:id', function(req, res) {
  db.category.find({
    where: { id: req.params.id }
  })
  .then(function(category) {
    if (!category) throw Error();
    res.render('categories/show', { category: category });
  })
  .catch(function(error) {
    res.status(400).render('main/404');
  });
});

module.exports = router;
