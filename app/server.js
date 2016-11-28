;(function(exports){

  var express = require('express'),
    nunjucks = require('nunjucks'),
    app = express(),
    home = require('./routes/home'),
    port = process.env.PORT;

  app.set('view engine', 'njk');

  nunjucks.configure(__dirname + '/views', {
    watch: true,
    express: app
  });

  app.use(express.static('./app/public'));

  app.use('/', home);

  app.listen(port, function(){
    console.log("\x1b[36mServer Running\x1b[0m\nhttp://localhost:" + port + "\n");
  });

  module.exports = app;

})(this);
