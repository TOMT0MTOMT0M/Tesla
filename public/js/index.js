let lock = document.querySelector(".lock")
let openLock = document.querySelector(".btnLock")
let car = document.querySelector(".teslaIndex")
let light = document.querySelector(".lightTeslaIndex")


function openApp() {
    let rangeText = document.querySelector(".range .stats")
    let batText = document.querySelector(".battery .stats")
    let range = Math.floor(Math.random() * 1000) + 1;
    rangeText.innerHTML = range + "km";
    document.querySelector(".km p").innerHTML = range + "km";
    let battery = Math.floor(Math.random() * 100) + 1;
    batText.innerHTML = battery + "%";
    lock.classList.toggle("lockOpen")
}

openLock.addEventListener("touchstart", openApp)
openLock.addEventListener("click", openApp)

const slider = document.querySelector('.scroll');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 0.3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
});



slider.addEventListener('touchstart', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.targetTouches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('touchleave', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('touchend', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.targetTouches[0].pageX - slider.offsetLeft;
    const walk = (x - startX) * 1; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
});

function toggleAnimationCar(){
    light.classList.toggle("animLight");
    console.log("test")
}
car.addEventListener("click", toggleAnimationCar)
