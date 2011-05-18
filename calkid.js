(function() {
  var Exercise, app, generate, port;
  Exercise = (function() {
    function Exercise(x, y) {
      var _ref, _ref2;
      if (x > y) {
        _ref = [x, y, x - y].sort(), this.x = _ref[0], this.y = _ref[1], this.total = _ref[2];
      } else {
        _ref2 = [x, y, y - x].sort(), this.x = _ref2[0], this.y = _ref2[1], this.total = _ref2[2];
      }
    }
    Exercise.prototype.add = function() {
      return "" + this.x + " + " + this.y;
    };
    Exercise.prototype.subtract = function() {
      if (this.x > this.y) {
        return "" + this.x + " - " + this.y;
      } else {
        return "" + this.y + " - " + this.x;
      }
    };
    return Exercise;
  })();
  generate = function(number, max) {
    var exercises, i;
    return exercises = (function() {
      var _results;
      _results = [];
      for (i = 0; 0 <= max ? i <= max : i >= max; 0 <= max ? i++ : i--) {
        _results.push(new Exercise(Math.floor(Math.random() * (max + 1)), Math.floor(Math.random() * (max + 1))));
      }
      return _results;
    })();
  };
  require.paths.unshift('./node_modules');
  app = require('express').createServer();
  app.get("/", function(req, res) {
    return res.send('Hello World');
  });
  port = process.env.VMC_APP_PORT || 3000;
  console.log("Listening on port " + port);
  app.listen(port);
}).call(this);
