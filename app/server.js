;(function(exports){

  var express = require('express'),
    nunjucks = require('nunjucks'),
    app = express(),
    home = require('./routes/home'),
    port = process.env.PORT;
    var path = require('path');

    var hof = require('hof');
    var wizard = hof.wizard;

    require('hof').template.setup(app);
    app.set('view engine', 'html');
    app.set('views', path.resolve(__dirname, './views'));
    app.enable('view cache');
    app.use(require('express-partial-templates')(app));
    app.engine('html', require('hogan-express-strict'));

    app.use(require('body-parser').urlencoded({extended: true}));
    app.use(require('body-parser').json());

    app.use(function setBaseUrl(req, res, next) {
      res.locals.baseUrl = req.baseUrl;
      next();
    });

    // Trust proxy for secure cookies
    app.set('trust proxy', 1);


  // app.set('view engine', 'njk');
  //
  // nunjucks.configure(__dirname + '/views', {
  //   watch: true,
  //   express: app
  // });

  // app.use(express.static('./app/public'));
  app.use('/public', express.static(path.resolve(__dirname, './public')));

  app.use('/', home);

  app.listen(port, function(){
    console.log("\x1b[36mServer Running\x1b[0m\nhttp://localhost:" + port + "\n");
  });

  module.exports = app;

})(this);
