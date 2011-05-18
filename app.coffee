validate = ->
  currentExercise = $("li.c").first().html()
  eval(currentExercise).toString() == $("#solution").val()

message = (value) =>
  $("#message").html(if value then 'juist!' else 'fout!')
  value

clear = ->
  $("#solution").val("")

nextExercise = ->
  clear()
  prev = $("li.c").first()
  if prev.length > 0
    prev.removeClass("c")
    prev.addClass("p")
  current = $("li.h").first()
  if current.length > 0
    current.removeClass("h")
    current.addClass("c")
  else
    $("#next").hide()

go = ->
  if message(validate())
    nextExercise()
  else
    clear()


$("#exercise").live 'submit', (event) =>
  event.preventDefault()
  go()