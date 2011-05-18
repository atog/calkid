(function() {
  var Exercise, app, connect, cycle, generate, port;
  Exercise = (function() {
    function Exercise(x, y) {
      var _ref, _ref2;
      if (x > y) {
        _ref = [x, y, x - y].sort(function(one, two) {
          return one - two;
        }), this.x = _ref[0], this.y = _ref[1], this.total = _ref[2];
      } else {
        _ref2 = [x, y, y - x].sort(function(one, two) {
          return one - two;
        }), this.x = _ref2[0], this.y = _ref2[1], this.total = _ref2[2];
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
  cycle = function(exercise, index) {
    if (index % 2 === 0) {
      return exercise.add();
    } else {
      return exercise.subtract();
    }
  };
  generate = function(number, max) {
    var exercises, i;
    return exercises = (function() {
      var _results;
      _results = [];
      for (i = 0; 0 <= number ? i <= number : i >= number; 0 <= number ? i++ : i--) {
        _results.push(new Exercise(Math.floor(Math.random() * (max + 1)), Math.floor(Math.random() * (max + 1))));
      }
      return _results;
    })();
  };
  connect = require('connect');
  app = require('express').createServer();
  app.set('view engine', 'jade');
  app.use(connect.static(__dirname + '/public'));
  app.get("/", function(req, res) {
    return res.render('index', {
      pageTitle: "Test",
      exercises: generate(100, 20),
      cycle: cycle
    });
  });
  port = 3000;
  console.log("Listening on port " + port);
  app.listen(port);
}).call(this);
