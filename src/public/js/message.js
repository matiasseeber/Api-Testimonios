const message = document.getElementById("message");

if (message.innerText != "") {
    if (message.innerText == "Registro añadido con exito") {
        message.className = "";
        message.classList.add("success");
    } else {
        message.className = "";
        message.classList.add("failed");
    }
} else
    message.className = "";