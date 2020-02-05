function validate(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var at = email.indexOf("@");
    var dot = email.lastIndexOf(".");

     if(!validateFirstName(firstName)){return false;} // validates the first name input
     if(!validateLastName(lastName)){return false;} // validates the last name input
     if(!validateEmail(email, at, dot)){return false;} // validates the email input
}
// validates the name input
function validateFirstName(name)
{

    if(name.length < 1)
    {
        alert("Please, enter your first name");
        return false;

    }
    else if (name.search(/[0-9]/) > 0) {
        alert("First name cannot contain any numbers");
        return false;
    }
    return true;

}
// validates the name input
function validateLastName(name)
{

    if(name.length < 1)
    {
        alert("Please, enter your last name");
        return false;

    }
    else if (name.search(/[0-9]/) > 0) {
        alert("Last name cannot contain any numbers");
        return false;
    }
    return true;

}
// validates the email
function validateEmail(email, at, dot)
{

    if(email.length < 1)
    {
        alert("Please, enter your email");
        return false;

    }
    if((at < 1) || (dot < (at+2)) || ((dot+2) >= email.length)){
        alert("Please enter a valid email address");
        return false;
    }

    return true;

}
function cancel() {
    document.getElementById("firstName").value = ""
    document.getElementById("lastName").value = ""
    document.getElementById("email").value = ""

}