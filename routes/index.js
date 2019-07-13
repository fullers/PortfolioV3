var express = require("express");
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
	res.render('index', {title: 'Portfolio'});
});

router.get('/resume', function(req, res) {
	res.render('resume', {title: 'Resume'});
});

module.exports = router;