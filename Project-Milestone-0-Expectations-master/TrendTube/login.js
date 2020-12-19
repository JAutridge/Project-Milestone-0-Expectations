function check() {
    var q1 = document.loginTextBox.textBox.value;
    var q2 = document.loginTextBox.passwordBox.value;
    if (q1 === "admin" && q2 === "password") {
        document.write("You Are Now Signed-In")
    } else {
        document.write("Your Username or Password was Incorrect, Please Try Again")
    }
}