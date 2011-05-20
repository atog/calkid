class Exercise
  constructor: (x, y) ->
    if x > y
      [@x, @y, @total] = [x, y, x-y].sort((one,two) -> one-two)
    else
      [@x, @y, @total] = [x, y, y-x].sort((one,two) -> one-two)

  add: ->
    "#{@x} + #{@y}"

  subtract: ->
    if @x > @y then "#{@x} - #{@y}" else "#{@y} - #{@x}"

# cycle between add and substract
cycle = (exercise, index) ->
  if(index % 2 == 0)
    exercise.add()
  else
    exercise.subtract()

# generate a number of exercises
generate = (number, max) ->
  exercises = (new Exercise(Math.floor(Math.random()*(max+1)), Math.floor(Math.random()*(max+1))) for i in [0..number])

# setup
connect = require('connect')
app = require('express').createServer()
app.set('view engine', 'jade')
app.use connect.static(__dirname + '/public')

app.get "/:max?", (req, res) ->
  res.render('index', {exercises: generate(100, parseInt(req.params.max) || 20), cycle: cycle})

port = process.env.VCAP_APP_PORT || 3000
console.log "Listening on port " + port
app.listen port