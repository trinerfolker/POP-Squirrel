const img = document.querySelector("#popimg");
const normeyeImg = "squirrel.jpg";
const bigeyeImg = "squirrel_Bigeyes.png";
const sound = new Audio("pop-sfx.mp3");

let isMouseDown = false;

const toggleEye = () => {
    img.src = img.src.includes(normeyeImg) ? bigeyeImg : normeyeImg;
    sound.play();
};

document.addEventListener("mousedown", () => {
    isMouseDown = true;
    toggleEye();
});

document.addEventListener("mouseup", () => {
    if (isMouseDown) {
        isMouseDown = false;
        toggleEye();
    }
});

document.addEventListener("touchstart", (e) => {
    e.preventDefault();
    isMouseDown = true;
    toggleEye();
});

document.addEventListener("touchend", (e) => {
    e.preventDefault();
    if (isMouseDown) {
        isMouseDown = false;
        toggleEye();
    }
});
