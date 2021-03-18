let btn = document.querySelector(".btnOn")
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

        var value = Math.round(circle.value() * 30);
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value+"°");
        }

    }
});

function random() {
    var precision = 10; // 2 decimals
    var randomnum = Math.floor(Math.random() * (2 * precision - 1 * precision) + 1 * precision) / (1 * precision);
    bar.animate((randomnum - 1));  // Number from 0.0 to 1.0 </script>
}
btn.addEventListener("click", random);

// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

