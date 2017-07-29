var link = document.querySelector(".reply_form");
var overlay = document.querySelector(".overlay");
var popup = document.querySelector(".reply");
var button = popup.querySelector(".close");
var reply_name = popup.querySelector("[name=reply_name]");
var email = popup.querySelector("[name=email]");
var textarea = popup.querySelector("[name=text]");
var name_key = localStorage.getItem("reply_name");
var email_key = localStorage.getItem("email");

function close() {
    popup.classList.remove("modal_show");
    popup.classList.remove("modal_error");
    overlay.classList.remove("overlay_show");
}

function open() {
    popup.classList.add("modal_show");
    overlay.classList.add("overlay_show");
}

link.addEventListener('click', function(event) {
    event.preventDefault();
    open();
    email.value = email_key;
    reply_name.value = name_key;

    if (reply_name.value == 0) {
        reply_name.focus();
    } else if (email.value == 0) {
        email.focus();
    } else {
        textarea.focus();
    }
});

popup.addEventListener("submit", function(event) {
    if (!reply_name.value || !email.value || !textarea.value) {
        event.preventDefault();
        popup.classList.remove("modal_error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal_error");
    } else {
        localStorage.setItem("reply_name", reply_name.value);
        localStorage.setItem("email", email.value);
    }
});

button.addEventListener('click', function(event) {
    event.preventDefault();
    close();
})

overlay.addEventListener('click', function(event) {
    close();
})

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        close();
    }
});