;(function(exports){
  'use strict';

  var router = require('express').Router();

  router.get('/', function(req,res){
    res.render('home/intro');
  });


  module.exports = router;

})(this);
