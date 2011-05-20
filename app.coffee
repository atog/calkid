validate = ->
  currentExercise = $("li.c").first().html()
  eval(currentExercise).toString() == $("#solution").val()

message = (value) =>
  if value
    $("#message").html('juist!')
    $("#message").removeClass('wrong')
    $("#message").addClass('correct')
  else
    $("#message").html('fout!')
    $("#message").removeClass('correct')
    $("#message").addClass('wrong')

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