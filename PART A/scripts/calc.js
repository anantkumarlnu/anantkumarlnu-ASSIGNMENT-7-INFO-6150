$(document).ready(function () {
  // fetching the username on load
  const storedName = sessionStorage.getItem("username");
  if (storedName) {
    $("#usernameDisplay").text(storedName);
  } else {
    window.location.href = "index.html";
  }
  // operation
  let selectedOperation = null;
  $(".operation").on("click", function () {
    validateInput();
    $(".operation").removeClass("btn-secondary").addClass("btn-dark");
    $(this).removeClass("btn-dark").addClass("btn-secondary");
    selectedOperation = $(this).data("operation");
  });

  $("#resBtn").on("click", () => {
    validateInput();
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
        result =
          secondnumber === 0
            ? "Cannot divide by zero"
            : firstnumber / secondnumber;
      } else {
        result = "Please select an operation";
      }
    } else {
      result = "Please enter values for both places";
    }

    $("#op-holder").val(result);
  });
  function validateInput() {
    $(".num-input input").each(function () {
      const value = $(this).val();
      let errorMessage = "";
      if (value === "") {
        errorMessage = "This field cannot be empty.";
      } else if (!/^\d+$/.test(value)) {
        errorMessage = "Only numeric values are allowed.";
      } else if (!isFinite(value)) {
        errorMessage = "Value cannot be infinite.";
      }
      $(this).next(".error-message").remove();
      if (errorMessage) {
        $(this).after(
          `<small class="text-danger error-message row">${errorMessage}</small>`
        );
      }
    });
  }

  $("#firstnumber, #secondnumber").on("input", validateInput);

});
