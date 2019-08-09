var express = require('express');
var router = express.Router();
var axios = require('axios');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/proxy', (req, res) => {
  axios.get("http://52.77.221.167/test").then(response => {
    res.send(response.data);
  }).catch(error => {
    res.send(500, error);
  });
});

module.exports = router;
