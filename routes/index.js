"use strict";

const router = require('express').Router();

router.get('/', (req,res) => {
  res.send('Hello World!')
});

router.get('/:name', function(req, res){
  res.send(`Hello ${req.params.name}!`)
});

module.exports = router;
