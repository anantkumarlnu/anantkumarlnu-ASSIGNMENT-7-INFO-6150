$(document).ready(function () {
  // fetching the username on load
  const storedName = sessionStorage.getItem("username");
  if (storedName) {
    $("#usernameDisplay").text(storedName);
  } else {
    window.location.href = "index.html";
  }

  function validateEmail() {
    const email = $("#email").val();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      showError("email", "Email cannot be empty");
      return false;
    } else if (!emailRegex.test(email)) {
      showError("email", "Please enter a valid email");
      return false;
    }
    clearError("email");
    return true;
  }

  function validateUsername() {
    const username = $("#username").val();
    if (!username) {
      showError("username", "Username cannot be empty");
      return false;
    } else if (username.length < 3 || username.length > 15) {
      showError("username", "Username must be between 3 and 15 characters");
      return false;
    }
    clearError("username");
    return true;
  }

  function validatePassword() {
    const password = $("#password").val();
    if (!password) {
      showError("password", "Password cannot be empty");
      return false;
    } else if (password.length < 6 || password.length > 20) {
      showError("password", "Password must be between 6 and 20 characters");
      return false;
    }
    clearError("password");
    return true;
  }

  function validateConfirmPassword() {
    const password = $("#password").val();
    const confirmPassword = $("#confirm_password").val();
    if (confirmPassword !== password) {
      showError("confirm_password", "Passwords do not match");
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
