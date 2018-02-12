var express = require('express');
var router = express.Router();
var fakeorders = require('fake-orders-package');

var users = [
  'Pippo',
  'Caio',
  'Sempronio'
];

router.use (function(req, res, next){
  if (users.indexOf(req.query.api_key)!=-1){
    next();
  } else {
    res.status(401).send({Message: 'Wrong Key'})
  }
})

router.post('/', function(req, res) {
    res.status(200).json(fakeorders.add(req.body));
})

router.get('/', function(req, res) {
    res.status(200).json(fakeorders.ordersByUser(req.query.api_key));
})

module.exports = router;
