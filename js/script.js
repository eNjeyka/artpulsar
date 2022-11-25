let scrollUpButton = document.getElementById("scroll-up-button")

// animation for 3d scale
document.querySelectorAll(".blast").forEach((el) => {
    el.addEventListener("mouseenter", function () {
        el.classList.add("rubberBand", "animated", "i-red");
        setTimeout(() => {
            el.classList.remove("rubberBand", "animated", "i-red");
        }, 1000);
    });
});

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    
    if (scroll >= 600) {
        scrollUpButton.removeAttribute("hidden")
    } else {
        scrollUpButton.setAttribute("hidden", "hidden")
    }
});