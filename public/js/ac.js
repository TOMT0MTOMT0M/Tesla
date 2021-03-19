let circle = document.querySelector(".barCircle");
let progressB = document.querySelector(".innerDiv")
$(function () {
    $(".ac").draggable({
        axis: 'y',
        containment: 'parent',
        handle: $(".acHeader"),
    });
    // Get the axis option, after initialization.
    let axis = $('.ac').draggable('option', 'axis');
    // Set the axis option, after initialization.
    $('.ac').draggable('option', 'axis', 'y');


});

$(function () {
    $(".barCircle").draggable({
        axis: 'x',
        containment: '.speedBar',
    });
    // Get the axis option, after initialization.
    let axis = $('.ac').draggable('option', 'axis');
    // Set the axis option, after initialization.
    $('.barCircle').draggable('option', 'axis', 'x');
});
let auto = document.querySelector(".auto")
let autoDiv = document.querySelector(".auto div")
let dry = document.querySelector(".dry")
let dryDiv = document.querySelector(".dry div")
let cool = document.querySelector(".cool")
let coolDiv = document.querySelector(".cool div")
let program = document.querySelector(".program")
let programDiv = document.querySelector(".program div")

function addAuto() {
    autoDiv.classList.toggle("btnModeActive")
}
auto.addEventListener("click", addAuto)
function addDry() {
    dryDiv.classList.toggle("btnModeActive")
}
dry.addEventListener("click", addDry)
function addCool() {
    coolDiv.classList.toggle("btnModeActive")
}
cool.addEventListener("click", addCool)
function addProgram() {
    programDiv.classList.toggle("btnModeActive")
}
program.addEventListener("click", addProgram)


let doLoop = false;
let progress = document.querySelector(".innerDiv");

function loopy() {
    if (doLoop === true) {
        setTimeout(function () {
            let ms = document.querySelector("#container svg");
            let x = document.querySelector(".barCircle");
            t = parseInt(x.style.left, 10);
            p = (x.offsetHeight / 2) + 10;
            let finalValue = (t + p) + "px";
            progress.style.width = finalValue;
            function percent() {
                total = (t + p);
                max = 292;
                msValue = 100 - ((total * 100) / max);
                msValueFinal = (msValue * max) / 100;
                return msValueFinal;
            }
            ms.style.animationDuration =300 + percent() + "ms";
            loopy();
        }, 11);
    }
};
$(document).on("mousedown", ".barCircle", function () {
    doLoop = true;
    loopy();
});
$(document).on("mouseup mouseout", ".barCircle", function () {
    doLoop = false;
});