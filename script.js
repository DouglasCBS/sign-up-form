const btn = document.querySelector('button[type="submit"]');
const password = document.querySelector("#password");
const confPassword = document.querySelector("#confirm-password");
const message = document.querySelector(".message");

btn.addEventListener("click", checkPassword);

function checkPassword() {
    if ((password.value.length !== 0 && confPassword.value.length !== 0) && (confPassword.value !== password.value)) {
        errorPass()
        return false
    }
    else if (confPassword.value === password.value) {
        password.classList.remove("error");
        confPassword.classList.remove("error");
        message.textContent = "";
        return true
    }
};

function errorPass() {
    confPassword.classList.add("error");
    password.classList.add("error");
    message.textContent = "* passwords do not match.";
    message.setAttribute("style", "color: red");
};
