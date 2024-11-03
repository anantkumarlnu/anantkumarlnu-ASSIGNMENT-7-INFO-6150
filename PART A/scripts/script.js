$(document).ready(function () {
  function validateEmail() {
    const email = $("#email").val();
    const emailRegex = /^[a-zA-Z0-9](\.?[a-zA-Z0-9_%+-])*@northeastern\.edu$/;
    if (!email) {
      showError("email", "Email address cannot be empty.");
      return false;
    } else if (!emailRegex.test(email)) {
      showError("email", "Please enter a valid northeastern email address.");
      return false;
    }
    clearError("email");
    return true;
  }

  function validateUsername() {
    const usernameRegex = /^[A-Za-z0-9_]+$/;
    const username = $("#username").val();
    if (!username) {
      showError("username", "Username cannot be empty.");
      return false;
    } else if (!usernameRegex.test(username)) {
      showError(
        "username",
        "Username can only have underscore, letters and numbers."
      );
      return false;
    } else if (username.length < 3 || username.length > 15) {
      if (username.length < 3)
        showError("username", "Username should atleast be 3 characters.");
      if (username.length > 15)
        showError("username", "Username should not be more than 15 character.");
      return false;
    }
    clearError("username");
    return true;
  }

  function validatePassword() {
    const password = $("#password").val();
    const lengthRegex = /.{8,}/; 
    const letterRegex = /[A-Za-z]/;
    const numberRegex = /\d/;
    if (!password) {
      showError("password", "Password cannot be empty.");
      return false;
    } else if (!lengthRegex.test(password)) {
      showError("password", "Password must be at least 8 characters long.");
      return false;
    } else if (!letterRegex.test(password)) {
      showError("password", "Password must contain at least one letter.");
      return false;
    } else if (!numberRegex.test(password)) {
      showError("password", "Password must contain at least one number.");
      return false;
    } else if (password.length > 20) {
      showError("password", "Password length must not be more than 20.");
      return false;
    }
    clearError("password");
    return true;
  }

  function validateConfirmPassword() {
    const password = $("#password").val();
    const confirmPassword = $("#confirm_password").val();
    if (confirmPassword !== password) {
      showError("confirm_password", "Passwords do not match.");
      return false;
    }
    clearError("confirm_password");
    return true;
  }

  function showError(inputId, message) {
    $(`#${inputId}`).addClass("is-invalid");
    $(`#${inputId}`).next(".error-message").remove();
    $(`#${inputId}`).after(
      `<small class="text-danger error-message col-12">${message}</small>`
    );
  }

  function clearError(inputId) {
    $(`#${inputId}`).removeClass("is-invalid");
    $(`#${inputId}`).next(".error-message").remove();
  }

  function toggleLoginButton() {
    if (
      validateEmail() &&
      validateUsername() &&
      validatePassword() &&
      validateConfirmPassword()
    ) {
      $("#loginButton").prop("disabled", false);
    } else {
      $("#loginButton").prop("disabled", true);
    }
  }

  $("#loginButton").on("click", function () {
    const username = $("#username").val();
    if (username) {
      sessionStorage.setItem("username", username);
      history.replaceState(null, null, window.location.href);
      window.location.href = "calc.html";
    }
  });

  $("#email").on("input", validateEmail);
  $("#username").on("input", validateUsername);
  $("#password").on("input", validatePassword);
  $("#confirm_password").on("input", validateConfirmPassword);
  // submit toggle
  $("#email, #username, #password, #confirm_password").on("input", function () {
    toggleLoginButton();
  });
});
