const sectionHome = document.getElementById("home");
const sectionPortfolio = document.getElementById("portfolio");

const backgroundImages = ["IMG_0500.jpg", "IMG_0798.jpg", "IMG_0964.jpg"];
let currentBGImage = 2

// animation for 3d scale
document.querySelectorAll(".blast").forEach((el) => {
    el.addEventListener("mouseenter", function () {
        el.classList.add("rubberBand", "animated", "i-red");
        setTimeout(() => {
            el.classList.remove("rubberBand", "animated", "i-red");
        }, 1000);
    });
});

// portfolio
let panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        panelActiveRemove();
        panel.classList.add("active");
    });
});

function panelActiveRemove() {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
}

function changeBackgroundImage() {
    if (currentBGImage >= backgroundImages.length - 1) {
        currentBGImage = 0
    } else {
        currentBGImage += 1
    }
    let image = backgroundImages[currentBGImage]
    sectionHome.style.backgroundImage = `url("src/${image}")`
}

setInterval(changeBackgroundImage, 5000)

// more photos 
const container = document.querySelector('.container-more-photos')
const unsplashURL = 'https://source.unsplash.com/random/'
const rows = 4

for(let i = 0; i < rows * 8; i++) {
    const img = document.createElement('img')
    img.src = `${unsplashURL}${getRandomSize()}`
    container.appendChild(img)
}

function getRandomSize() {
    return `${getRandomNr()}x${getRandomNr()}`
}

function getRandomNr() {
    return Math.floor(Math.random() * 20) + 180
}