const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", e => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameVaule = username.value.trim();
  const emailVaule = email.value.trim();
  const passwordVaule = password.value.trim();
  const password2Vaule = password2.value.trim();

  if (usernameVaule === "") {
    //show error
    //add error class
    setErrorFor(username, "Username cannot be blank");
  } else {
    //add success class
    setSuccessFor(username);
  }

  if (emailVaule === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailVaule)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccessFor(email);
  }
  if (passwordVaule === "") {
    setErrorFor(password, "Password cannot be blank");
  } else {
    setSuccessFor(password);
  }

  if (password2Vaule === "") {
    setErrorFor(password2, "Password2 cannot be blank");
  } else if (passwordVaule !== password2Vaule) {
    setErrorFor(password2, "Passwords does not match");
  } else {
    setSuccessFor(password2);
  }
}
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  //add error message
  small.innerText = message;
  //add error class
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
