function check(form) { /* Check the value of the Username and Password*/
    if(form.login.value == "admin" && form.pass.value == "admin12345"){
        window.open(alert("Login Successful."));
    }
    else{
        alert("Your username or password are not permitted.");
    }
}