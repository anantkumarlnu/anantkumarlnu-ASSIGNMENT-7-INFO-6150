$(document).ready(function () {
  let selectedOperation = null;
  $(".operation").on("click", function () {
    $(".operation").removeClass("btn-secondary").addClass("btn-dark");
    $(this).removeClass("btn-dark").addClass("btn-secondary");
    selectedOperation = $(this).data("operation");
  });

  $("#resBtn").on("click", function () {
    const firstnumber = parseFloat($("#firstnumber").val());
    const secondnumber = parseFloat($("#secondnumber").val());
    let result;
    if (firstnumber && secondnumber) {
      if (selectedOperation === "add") {
        result = firstnumber + secondnumber;
      } else if (selectedOperation === "sub") {
        result = firstnumber - secondnumber;
      } else if (selectedOperation === "mul") {
        result = firstnumber * secondnumber;
      } else if (selectedOperation === "div") {
        if (secondnumber === 0) {
          result = "Cannot divide by zero";
        } else {
          result = firstnumber / secondnumber;
        }
      } else {
        result = "Please select an operation";
      }
    } else {
      result = "Please enter values for both places";
    }
    $("#op-holder").val(result);
  });
});
