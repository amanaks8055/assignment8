
function validateForm() {
   
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var termsAndConditions = document.getElementById("termsAndConditions").checked;
 
    var phoneRegex = /^\d{10}$/;
    var emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    var passwordRegex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  
    var firstNameError = "Name cannot be empty";
    var lastNameError = "Name cannot be empty";
    var phoneNumberError = "Please enter a valid phone number";
    var emailError = "Please enter a valid email address";
    var passwordError = "Password must be at least 8 characters long and contain at least one uppercase letter and one numeric digit";
    var termsAndConditionsError = "Please agree to the terms and conditions";

    document.getElementById("firstNameError").innerHTML = "";
    document.getElementById("lastNameError").innerHTML = "";
    document.getElementById("phoneNumberError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("termsAndConditionsError").innerHTML = "";}

    if (firstName == "") {
        document.getElementById("firstNameError")


    }
