let index = 0;

function moverSlide(direccion) {

    const slides = document.getElementById("slides");
    const total = slides.children.length;

    index = index + direccion;

    if (index < 0) {
        index = total - 1;
    }

    if (index >= total) {
        index = 0;
    }

    slides.style.transform = "translateX(" + (-index * 100) + "%)";
}
