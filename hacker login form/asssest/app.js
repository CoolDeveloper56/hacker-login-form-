const form_page = document.getElementById("form");
const Email = document.forms['form']['Email'];
const Password = document.forms['form']['Password'];
const Border_email = document.getElementById("email");
const Border_password = document.getElementById("password");
const Error_Email = document.getElementById("Error_Email");
const Error_Password = document.getElementById("Error_Password");
const Email_Verify = Email.addEventListener("textInput", myfunction2);
const Pass_Verify = Password.addEventListener("textInput", myfunction3);
const Balls_animation = document.getElementById("Balls_animation");
const sound = document.getElementById("Hacker_sound");
const Characters = [{ characters: "@" },
{ Characters2: "@ , $ , & , %" }];

function myfunction() {
    if (Email.value.length < 9 && Email.value !== Characters[0].characters) {
        Border_email.style.borderBottom = "3px solid red";
        Error_Email.style.display = "block";
        Email.focus();
        return false;
    }

    if (Password.value.length < 10 && Password.value !== Characters[1].Characters2) {
        Border_password.style.borderBottom = "3px solid red";
        Error_Password.style.display = "block";
        Password.focus();
        return false;
    }

   else if (Email.value.length > 9 && Password.value.length > 10) {
        sound.play();
        Balls_animation.style.visibility = "visible";
        setTimeout(() => {
            sound.pause();
            Balls_animation.style.visibility = "hidden"
        }, 10000)
    }

}

function myfunction2() {
    if (Email.value.length > 9) {
        Border_email.style.borderBottom = "3px solid lime";
        Error_Email.style.display = "none";
        return true;
    }
}

function myfunction3() {
    if (Password.value.length > 10) {
        Border_password.style.borderBottom = "3px solid lime";
        Error_Password.style.display = "none";
        return true;
    }
}








