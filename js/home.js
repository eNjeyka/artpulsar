const homeBackground = document.querySelector(".home-background");
const backgroundImages = ["bg-1.jpg", "bg-2.jpg", "bg-3.jpg"];
let currentBGImage = 0

function changeBackgroundImage() {
    if (currentBGImage >= backgroundImages.length - 1) {
        currentBGImage = 0
    } else {
        currentBGImage += 1
    }
    let image = backgroundImages[currentBGImage]
    homeBackground.style.backgroundImage = `url("src/home-backgrounds/${image}")`
}

setInterval(changeBackgroundImage, 5000)