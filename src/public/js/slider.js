let next = document.getElementById('nextSlide');
let previous = document.getElementById("previousSlide");
let slider = document.getElementById("slider");

function moveSlide(children, index) {
    for (let i = 0; i < children.length; i++) {
        const li = children[i];
        li.style.transform = "translateX(-" + index + "00%)";
    }
}

function sliderFunctionality() {
    let cont = 0
    previous.onclick = function() {
        cont--;
        if (cont === -1)
            cont = slider.children.length - 1;
        moveSlide(slider.children, cont)
    }

    next.onclick = function() {
        cont++;
        if (cont === slider.children.length)
            cont = 0;
        moveSlide(slider.children, cont)
    }
}

window.addEventListener("DOMContentLoaded", function() {
    sliderFunctionality()
})