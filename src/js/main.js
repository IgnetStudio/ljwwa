// DEBUG MODE: add outline to display each vector path

// [].forEach.call(document.querySelectorAll("*"), function (a) {
//     a.style.outline = "3px solid #" + (~~(Math.random() * (1 << 24))).toString(16);
// })

// ANIMATE SVG

const $svg = $('svg').drawsvg({
    callback: function () {
        animate();
    }
});

function animate() {
    $svg.drawsvg('animate');
}

animate();

// SET COUNTER

let indexBar = 7;
const progressCount = setInterval(function () {
    // display progress bar
    let bar = document.getElementById("vector-badge-progress");
    bar.value = 7 - indexBar;
    // decrement
    indexBar--;
    console.log(`indexBar: ${indexBar}`);
    // stop count
    if (indexBar < 0) {
        clearInterval(progressCount);
    }
}, 1000);

let indexTime = 7;
const textCount = setInterval(function () {
    // display info
    let info = document.getElementById("vector-counter-number");
    info.innerHTML = indexTime + " seconds remaining";
    // decrement
    indexTime--;
    console.log(`indexTime: ${indexTime}`);
    // stop count
    if (indexTime < 0) {
        document.getElementById("vector-counter-number").innerHTML = "Infinite animation triggered"
        clearInterval(textCount);
    }
}, 1000);