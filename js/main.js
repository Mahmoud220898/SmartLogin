var newName = document.getElementById("yrName");
var email = document.getElementById("yrEmail");
var frgtEmail = document.getElementById("frgtEmail");

var password = document.getElementById("yrPassword");
var regexE = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i;
var regexN = /^([a-zA-Z_\-\.]{2,15})$/i;
var regexP = /^([a-zA-Z0-9]{2,15})$/i;
var emailList;
var add = document.getElementById("add");

if (localStorage.getItem("emailList") == null) {
  emailList = [];
} else {
  emailList = JSON.parse(localStorage.getItem("emailList"));
}

function addEmail() {
  if (
    regexN.test(newName.value) == true &&
    regexE.test(email.value) == true &&
    regexP.test(password.value) == true
  ) {
    var product = {
      name: newName.value,
      email: email.value,
      password: password.value,
    };
    emailList.push(product);
    localStorage.setItem("emailList", JSON.stringify(emailList));
    clearForm();
    window.location.href = "index.html";
    return true;
  } else {
    document.getElementById(
      "errorSignUp"
    ).innerHTML = `<p class="text-danger text-center pt-3"> All input are require</p>`;
    return false;
  }
}

function clearForm() {
  newName.value = "";
  email.value = "";
  password.value = "";
}

function SignIn() {
  for (var i = 0; i < emailList.length; i++) {
    if (email.value == "" || password.value == "") {
      document.getElementById(
        "required"
      ).innerHTML = `<div><p class="text-danger">All input are required</p></div>`;
    } else if (
      email.value == emailList[i].email &&
      password.value == emailList[i].password
    ) {
      console.log(`Welcome back ${emailList[i].name}`);
      success.classList.replace("d-none", "d-block");
      bsignin.classList.replace("d-block", "d-none");
      body.classList.replace("signInBody", "sucessBody");

      document.getElementById(
        "welcome"
      ).innerHTML = `Welcome back ${emailList[i].name}`;
    } else {
      console.log("un Valid ");
      document.getElementById(
        "required"
      ).innerHTML = `<div><p class="text-danger">Invalid Email or Password, Please try again!</p></div>`;
    }
  }
}

function next() {
  for (var i = 0; i < emailList.length; i++) {
    if (frgtEmail.value == emailList[i].email) {
      forget.classList.replace("d-block", "d-none");
      console.log("true ");
    } else {
      console.log("un Valid ");
    }
  }
}

function validEmail() {
  if (regexE.test(email.value) == true) {
    email.style.border = ".25rem solid green";
    return true;
  } else {
    email.style.border = ".25rem solid red";
    return false;
  }
}

function validName() {
  if (regexN.test(newName.value) == true) {
    newName.style.border = ".25rem solid green";
    return true;
  } else {
    newName.style.border = ".25rem solid red";
    return false;
  }
}
function validPassword() {
  if (regexP.test(password.value) == true) {
    password.style.border = ".25rem solid green";
    return true;
  } else {
    password.style.border = ".25rem solid red";
    return false;
  }
}
