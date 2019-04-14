var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('json', { title: 'Retornar JSON' });
});

module.exports = router;
