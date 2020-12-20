function check() {
    var q1 = document.loginTextBox.textBox.value;
    var q2 = document.loginTextBox.passwordBox.value;
    if (q1 === "admin" && q2 === "password") {

      self.location = "https://webpages.uncc.edu/jautridg/TrendTube/HomePage.html";
        alert("You Are Now Signed-In")

    } else {
      alert("UserName Or Password Was Incorrect, Please Try Again!")
    }
}
