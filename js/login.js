// login form

document.getElementById("submit-button").addEventListener("click", function () {
  const emailField = document.getElementById("email-feild");
  const emailFieldValue = emailField.value;
  const passwordField = document.getElementById("password-feild");
  const passwordFieldValue = passwordField.value;
  if (emailFieldValue == "baperpola@email.com" && passwordFieldValue == "123") {
    window.location.href = "banking.html";
  }
});


