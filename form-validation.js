function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  var passlength = passEntered.length;
//username validation
  if(userEntered.length < 6){
      document.getElementById("usernameError").innerHTML="Username must be at least 6 characters";
      document.getElementById("usernameError").classList.remove("hidden-message");
      document.getElementById("usernameError").classList.add("shown-message");
      document.getElementById("usernameGroup").classList.add("has-error");
  }
  else if(userEntered.indexOf(" ") >= 0){
    document.getElementById("usernameError").innerHTML="Username must not contain spaces.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  else{
    document.getElementById("usernameError").classList.remove("shown-message");
    document.getElementById("usernameError").classList.add("hidden-message");
    document.getElementById("usernameGroup").classList.add("has-success");
  }

//password validation
  if(passEntered.toLowerCase() == "password"){
    document.getElementById("passwordError").innerHTML="Password cannot be &quotpassword&quot";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else if(passEntered == userEntered){
    document.getElementById("passwordError").innerHTML="Password must not be the same as the username.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else if(passlength < 6 || passlength > 20){
    document.getElementById("passwordError").innerHTML="Password must contain between 6 and 20 characters.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else{
    document.getElementById("passwordError").classList.remove("shown-message");
    document.getElementById("passwordError").classList.add("hidden-message");
    document.getElementById("passwordGroup").classList.add("has-success");
  }
}
