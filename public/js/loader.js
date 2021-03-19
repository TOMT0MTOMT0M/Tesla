let btn = document.querySelector(".btnOn");
let acOpen = false;
let ac = document.querySelector(".ac");
let newText = document.querySelector(".temperture .stats")
let off = document.querySelector(".off");
let kmBool = false;


let bar = new ProgressBar.Circle(container, {
    color: '#ccc',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 20,
    easing: 'easeInOut',
    duration: 2000,
    text: {
        autoStyleContainer: false
    },
    from: { color: '#11A8FD', width: 20 },
    to: { color: '#11A8FD', width: 20 },
    // Set default step function for all animate calls
    step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);
        let value = Math.round(circle.value() * 30);
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value + "°C");
            console.log(value)
            newText.innerHTML = value + "°C";

        }
    }
});

function random() {
    let precision = 10; // 2 decimals
    let randomnum = Math.floor(Math.random() * (2 * precision - 1 * precision) + 1 * precision) / (1 * precision);
    bar.animate((randomnum - 1));  // Number from 0.0 to 1.0 </script>
}

function stopBar() {
    if (acOpen === false) {
        acOpen = true;
        random();
    }
    else {
        btn.removeEventListener("click", random);
    }
}
btn.addEventListener("click", stopBar);
btn.addEventListener("click", kmText);

function kmText() {
    btn.classList.toggle("btnOnActive");
    document.querySelector("#container svg").classList.toggle("degreeOff")
    if (kmBool === false) {
        off.innerHTML = "on";
        kmBool = true;
    } else {
        off.innerHTML = "off";
        kmBool = false;
    }
}

window.onload = function onLoad() {
    document.querySelector("#container svg").classList.add("degreeOff")
}
