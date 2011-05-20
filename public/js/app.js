var clear, go, message, nextExercise, validate;
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
validate = function() {
  var currentExercise;
  currentExercise = $("li.c").first().html();
  return eval(currentExercise).toString() === $("#solution").val();
};
message = __bind(function(value) {
  if (value) {
    $("#message").html('juist!');
    $("#message").removeClass('wrong');
    $("#message").addClass('correct');
  } else {
    $("#message").html('fout!');
    $("#message").removeClass('correct');
    $("#message").addClass('wrong');
  }
  return value;
}, this);
clear = function() {
  return $("#solution").val("");
};
nextExercise = function() {
  var current, prev;
  clear();
  prev = $("li.c").first();
  if (prev.length > 0) {
    prev.removeClass("c");
    prev.addClass("p");
  }
  current = $("li.h").first();
  if (current.length > 0) {
    current.removeClass("h");
    return current.addClass("c");
  } else {
    return $("#next").hide();
  }
};
go = function() {
  if (message(validate())) {
    return nextExercise();
  } else {
    return clear();
  }
};
$("#exercise").live('submit', __bind(function(event) {
  event.preventDefault();
  return go();
}, this));