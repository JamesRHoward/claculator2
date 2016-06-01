var add = function(number1, number2) {
  return number1 + number2;
};
var subtract = function(number1, number2) {
  return number1 - number2;
};
var multiply = function(number1, number2) {
  return number1 * number2;
};
var divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {
  $("button#addbtn").click(function(event) {
  event.preventDefault()
  var number1 = parseInt($("#imput1").val());
  var number2 = parseInt($("#imput2").val());
  var result = add(number1, number2);
  $("#output").text(result);
  });
});

$(document).ready(function() {
  $("button#subtractbtn").click(function(event) {
  event.preventDefault()
  var number1 = parseInt($("#imput1").val());
  var number2 = parseInt($("#imput2").val());
  var result = subtract(number1, number2);
  $("#output").text(result);
  });
});

$(document).ready(function() {
  $("button#multiplybtn").click(function(event) {
  event.preventDefault()
  var number1 = parseInt($("#imput1").val());
  var number2 = parseInt($("#imput2").val());
  var result = multiply(number1, number2);
  $("#output").text(result);
  });
});

$(document).ready(function() {
  $("button#dividebtn").click(function(event) {
  event.preventDefault()
  var number1 = parseInt($("#imput1").val());
  var number2 = parseInt($("#imput2").val());
  var result = divide(number1, number2);
  $("#output").text(result);
  });
});
