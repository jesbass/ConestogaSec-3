var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ProjectTrackerSec3' });
});

router.get('/about', (req,res,next) => {
  res.render('about', { title: 'About', 
  pageText: 'Here is some information about this project' })
})

module.exports = router;