var express = require('express');
var router = express.Router();
var fakeorders = require('fake-orders-package');

router.use(function (req, res, next) {
  if (req.query.api_key == 'admin'){
    next();
  } else {
    res.status(401).send('Wrong Key')
  }
})

router.get('/', function(req, res) {
    res.status(200).json(fakeorders.all());
})

router.get('/reset', function(req, res) {
    res.status(200).json(fakeorders.reset());
})

router.delete('/:id', function(req, res) {
    if (!Number.isInteger(parseInt(req.params.id))) {
      return res.status(400).json({message:"id must be a integer"})
    }
    var order = fakeorders.getById(parseInt(req.params.id));
    if (order === null) {
      return res.status(404).json({message: "order not found"});
    }
    res.json(fakeorders.delete(parseInt(req.params.id)));
})

router.put('/:id', function(req, res) {
    res.status(200).json(fakeorders.update(parseInt(req.params.id), req.body));
})

router.get('/getByStatus', function(req, res) {
    res.status(200).json(fakeorders.ordersByStatus(req.query.status));
})

router.get('/receipts', function(req, res) {
    res.status(200).json(fakeorders.receipts());
})

router.get('/getByUsers', function(req, res) {
    res.status(200).json(fakeorders.ordersByUser(req.query.user));
})

module.exports = router;
