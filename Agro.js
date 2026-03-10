<script>

    function contacto(){
        window.location.href = "https://wa.me/573127380841";
}

    let index = 0;

    function moverSlide(direccion){

const slides = document.getElementById("slides");
    const total = slides.children.length;

    index += direccion;

    if(index < 0){
        index = total - 1;
}

if(index >= total){
        index = 0;
}

    slides.style.transform = "translateX(" + (-index * 100) + "%";
}

    setInterval(function(){
        moverSlide(1);
}, 4000);

</script>
