class Exercise
  constructor: (x, y) ->
    if x > y
      [@x, @y, @total] = [x, y, x-y].sort()
    else
      [@x, @y, @total] = [x, y, y-x].sort()

  add: ->
    "#{@x} + #{@y}"

  subtract: ->
    if @x > @y then "#{@x} - #{@y}" else "#{@y} - #{@x}"


generate = (number, max) ->
  exercises = (new Exercise(Math.floor(Math.random()*(max+1)), Math.floor(Math.random()*(max+1))) for i in [0..max])

# console.log generate(15, 100)
app = require('express').createServer()

app.get "/", (req, res) ->
  res.send 'Hello World'

port = 3000
console.log "Listening on port " + port
app.listen port