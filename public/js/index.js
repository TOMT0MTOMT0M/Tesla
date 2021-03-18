let lock = document.querySelector(".lock")
let openLock = document.querySelector(".btnLock")

function openApp() {
    lock.classList.toggle("lockOpen")
}

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
