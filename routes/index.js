var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('user/index', { loggedIn: false });
// });
router.get('/login', (req, res) => {
  res.render('user/login', { loggedIn: false })
});


router.get('/signup', (req, res) => {
  res.render('user/signup', { loggedIn: false })
})

router.get('/', function (req, res, next) {
  res.render('user/dashboard', { loggedIn: false });
});

module.exports = router;
